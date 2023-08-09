/**
 * Author: Amrendra Kumar Singh
 * Description: This file defines the routes for article-related operations, such as creating a new article,
 * fetching all articles, and updating an article's content. These routes are protected by authentication middleware.
 */

import express from 'express';
import controllers from '../controllers/ArticleController';
import { authenticateToken } from '../middleware/authenticateToken';

const router = express.Router();

/**
 * POST /articles
 * Description: Create a new article
 * This route is responsible for creating a new article by handling the creation request.
 * It invokes the createArticle method from the Article controller to create the article in the database.
 * This route is protected by the authenticateToken middleware which verifies the user's JWT token.
 */
router.post('/articles', authenticateToken, controllers.createArticle);

/**
 * GET /articles
 * Description: Get all articles
 * This route is responsible for fetching all articles.
 * It invokes the getArticles method from the Article controller to fetch all the articles from the database.
 * This route is protected by the authenticateToken middleware which verifies the user's JWT token.
 */
router.get('/articles', authenticateToken, controllers.getArticles);

/**
 * PUT /articles
 * Description: Update an article's content
 * This route is responsible for updating an article's content by handling the update request.
 * It invokes the updateArticleContent method from the Article controller to update the article in the database.
 * This route is protected by the authenticateToken middleware which verifies the user's JWT token.
 */
router.put('/articles', authenticateToken, controllers.updateArticleContent);

export default router;
