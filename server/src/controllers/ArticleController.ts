/**
 * Author: Amrendra Kumar Singh
 * File: ArticleController.ts
 * Description: This file defines the controller for Article model.
 */

import { Request, Response, NextFunction } from 'express';
import Article, { IArticle } from '../models/article';
import Logging from '../library/Logger';
import { validateArticle } from '../validators/articleValidator'; // assuming you have a validator
import User from '../models/users';
import dotenv from 'dotenv';
dotenv.config();

const logger = Logging;

/**
 * Description: This function is used to create a new article.
 * The function first validates the user input using Joi. If the input is valid,
 * it checks if an author with the given name exists in the database. If the author exists,
 * it then checks if an article with the same title already exists.
 * If no such article exists, it saves the new article to the database.
 * If any errors occur during this process, they are logged and returned in the response.
 *
 * @param req - The request object containing the article details.
 * @param res - The response object used to send the response.
 * @param next - The next function to pass control to the next middleware.
 */
const createArticle = async (req: Request, res: Response, next: NextFunction) => {
    // Validate article input
    const { error } = validateArticle(req.body);

    // If there is a validation error, log it and return it in the response
    if (error) {
        logger.error(`Validation error: ${error.details[0].message}`);
        return res.status(400).json({ error: error.details[0].message });
    }

    // Extract article details from the request body
    const { title, content, author } = req.body;

    // Check if an author exists with the given author name
    const existingAuthor = await User.findOne({ email: author });

    // If the author does not exist, log a warning and return an error in the response
    if (!existingAuthor) {
        logger.warn(`Author does not exist.`);
        return res.status(400).json({ error: 'Author does not exist.' });
    }

    // Check if an article already exists with the given title
    const existingArticle = await Article.findOne({ title });

    // If the article exists, log a warning and return an error in the response
    if (existingArticle) {
        logger.warn(`${title}: Article already exists.`);
        return res.status(400).json({ error: 'Article already exists', title });
    }

    // Create a new article object
    const newArticle: IArticle = new Article({ title, content, author });

    // Try to save the new article to the database
    try {
        const savedArticle = await newArticle.save();

        // Log that the article was created successfully and return the new article in the response
        logger.info(`${title}: Article created.`);
        res.status(201).json({ newArticle: savedArticle });
    } catch (error) {
        // If there is an error while saving the article, log the error and return it in the response
        logger.error(`${title}: Error while creating article.`);
        logger.error(error);
        res.status(500).json({ error: 'Error while creating article.' });
    }
};

/**
 * Description: This function is used to fetch all the articles.
 *
 * @param req - The request object.
 * @param res - The response object used to send the response.
 * @param next - The next function to pass control to the next middleware.
 */
const getArticles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        logger.error('Error while fetching articles.');
        logger.error(error);
        res.status(500).json({ error: 'Error while fetching articles.' });
    }
};

/**
 * Description: This function is used to update an existing article's content.
 * It first checks if an article with the given title exists, if it does, it updates its content.
 *
 * @param req - The request object containing the new article content.
 * @param res - The response object used to send the response.
 * @param next - The next function to pass control to the next middleware.
 */
const updateArticleContent = async (req: Request, res: Response, next: NextFunction) => {
    const { title, content } = req.body;

    try {
        const existingArticle = await Article.findOne({ title });

        if (!existingArticle) {
            logger.warn('Article not found.');
            return res.status(404).json({ error: 'Article not found.' });
        }

        existingArticle.content = content;
        await existingArticle.save();

        logger.info(`Updated content for article: ${title}.`);
        res.status(200).json({ message: 'Article content updated.', updatedArticle: existingArticle });
    } catch (error) {
        logger.error('Error while updating article content.');
        logger.error(error);
        res.status(500).json({ error: 'Error while updating article content.' });
    }
};

export default { createArticle, getArticles, updateArticleContent };
