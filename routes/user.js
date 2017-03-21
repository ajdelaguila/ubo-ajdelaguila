var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var UserController = require('../controllers/user.js');

/**
 * @swagger
 * definition:
 *   User:
 *     type: object
 *     properties:
 *       userId:
 *         type: string
 *       userFirstNm:
 *         type: string
 *       userLastNm:
 *         type: string
 *       userEmail:
 *         type: string
 *       userCostCenter:
 *         type: string
 *       records:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             customer:
 *               type: object
 *               properties:
 *                 firstNm:
 *                   type: string
 *                 lastNm:
 *                   type: string
 *                 businessNm:
 *                   type: string
 *                 customerNr:
 *                   type: number
 *             account:
 *               type: object
 *               properties:
 *                 accountNr:
 *                   type: number
 *             card:
 *               type: object
 *               properties:
 *                 cardNr:
 *                   type: number
 *             timestamp:
 *               type: string
 *               format: date-time
 *             application:
 *               type: string
 */

/**
 * @swagger
 * /ubo:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 */
router.get('/', UserController.GetUser);

/**
 * @swagger
 * /ubo/{userid}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: User's ID
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single user
 */
router.get('/:userId', UserController.GetUserById);

/**
 * @swagger
 * /ubo/{userid}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: User's ID
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.put('/:userId', UserController.UpdateUser);

/**
 * @swagger
 * /ubo:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post('/', UserController.PostUser);

/**
 * @swagger
 * /ubo/{userid}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: User's ID
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:userId', UserController.DeleteUser);

module.exports = router;
