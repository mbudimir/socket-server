import { Router,Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response)=>{
    res.json({
        ok: true,
        message: 'todo liso ameo'
    })
});

router.post('/messages', (req: Request, res: Response)=>{

    const body = req.body.body;
    const from = req.body.from;

    res.json({
        ok: true,
        message: `hola ${body} desde ${from}`
    })
});
router.post('/messages/:id', (req: Request, res: Response)=>{
    const id = req.params.id;
    const body = req.body.body;
    const from = req.body.from;

    res.json({
        ok: true,
        message: 'holiss',
        body,
        from,
        id
    })
});

export default router;