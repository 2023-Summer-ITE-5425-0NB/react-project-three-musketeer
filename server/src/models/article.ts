/**
 * Author: Amrendra Kumar Singh
 * File: article.ts
 * Description: This file defines the schema for an Article model using Mongoose and TypeScript.
 */

import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for an Article
export interface IArticle extends Document {
    title: string;
    content: string;
    author: string;
}

// Define the schema for an Article
const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true }, // Title must be unique
    content: { type: String, required: true }, // Content is required
    author: { type: String, required: true } // Author is required
});

// Export the model
export default mongoose.model<IArticle>('Article', ArticleSchema);
