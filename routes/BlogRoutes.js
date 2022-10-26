const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: The Blogs managing API
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: create blog
 *     tags: [Blogs]
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/CreateBlog'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Blog'
 *     security:
 *      - bearerAuth: []
 */

router.post("/", createBlog);

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *     security:
 *      - bearerAuth: []
 */
router.get("/", getAllBlogs);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: get blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *     security:
 *      - bearerAuth: []
 */
router.get("/:id", getBlogById);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *               schema:
 *                  $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Blog'
 *     security:
 *      - bearerAuth: []
 */
router.put("/:id", updateBlog);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: delete blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         description: Blog deleted sucessfully
 *     security:
 *      - bearerAuth: []
 */
router.delete("/:id", deleteBlog);



module.exports = router;
