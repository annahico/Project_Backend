const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/userController');
const auth = require("../../middlewares/auth");  // Ensure this path is correct
const authorize = require("../../middlewares/authorize");

// USER ROUTES
router.get("/profile", auth, ctrl.getUserProfile);
router.put("/profile", auth, ctrl.updateUserProfile);
router.get("/appointment", auth, ctrl.getUserAppointments);
router.post("/appointment", auth, ctrl.addAppointmentsToUser);
router.delete("/appointment", auth, ctrl.removeAppointmentsFromUser);
router.get("/services", auth, ctrl.getUserServices);

// USER ENDPOINTS
router.post("/", auth, authorize("admin"), ctrl.create);
router.get("/", auth, authorize("admin"), ctrl.getAll);
router.get("/:id", auth, authorize("admin"), ctrl.getById);
router.put("/:id", auth, authorize("admin"), ctrl.update);
router.delete("/:id", auth, authorize("admin"), ctrl.delete);
router.get("/:id/services", auth, authorize("admin"), ctrl.getServicesByUserId);

module.exports = router;
