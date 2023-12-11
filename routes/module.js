const { Router } = require("express")
const moduleRepo = require("../repository/module");

const router = Router();


router.post("/", async (req, res) => {
    let { title, teacher_id } = req.body;

    if (!title || !teacher_id)
        return res.status(400).json({
            message: "Fill the required fields"
        });

    await moduleRepo.insert({
        title, teacher_id
    });

    return res.status(200).json({
        message: "Added successfully",
    });
});

router.get("/", async (req, res) => {
    const teacherId = req.query.teacherId;

    if (!teacherId)
        return res.status(404).json({
            message: `Can't GET ${req.originalUrl}. required query 'teacherId'`
        });

    const modules = await moduleRepo.selectByteacherId(teacherId);

    return res.status(200).json({
        message: "Success",
        data: modules
    });
});

module.exports = router;