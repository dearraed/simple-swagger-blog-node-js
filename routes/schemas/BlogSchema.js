/**
 * @swagger
 * components:
 *   securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateBlog:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - image
 *       properties:
 *         title:
 *           type: string
 *           description: ID of the stadium
 *         body:
 *           type: string
 *           description: Location of the match
 *         image:
 *           type: string
 *           description: The match participants
 * 
 *     Blog:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: ID of the stadium
 *         body:
 *           type: string
 *           description: Location of the match
 *         image:
 *           type: string
 *           description: The match participants
 */