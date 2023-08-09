/**
 * Author: Amrendra Kumar Singh
 * File: articleValidator.ts
 * Description: This file defines the validateArticle function which utilizes Joi to validate article input based on the IArticle interface.
 * This function can be used in controllers or routes to validate article data before processing it or saving it to the database.
 */

import Joi from 'joi';
import { IArticle } from '../models/article';

/**
 * Validate article input based on IArticle interface
 * This function takes an article object as input and returns the validation results.
 * @param {IArticle} article - The article data to be validated.
 * @returns {Joi.ValidationResult} The results of the validation. If validation is successful, an object with a 'value' key is returned. If validation fails, an object with an 'error' key is returned.
 */

export const validateArticle = (article: IArticle) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(100).required(),
        content: Joi.string().min(100).max(5000).required(),
        author: Joi.string().min(3).max(50).required()
    });

    return schema.validate(article);
};
