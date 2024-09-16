const tgBotToken = process.env.TG_BOT_TOKEN;
const chatId = process.env.CHAT_ID;

export default async function handler(req, res) {
    let text = '';

    for (const [key, val] of Object.entries(req.body)) {
        text += `${key}: ${val}\n`;
    }

    text += `\n${req.socket.remoteAddress}`;
    text += `\n${new Date().toLocaleString()}`;

    const params = new URLSearchParams({
        chat_id: chatId,
        text: text,
    });

    const messageUrl = `https://api.telegram.org/bot${tgBotToken}/sendMessage?${params}`;

    const messageResponse = await fetch(messageUrl);

    // const files = req.files;

    // for (const file of files) {
    //     const fileUrl = `https://api.telegram.org/bot${tgBotToken}/sendDocument`;

    //     const document = new FormData();
    //     document.append('chat_id', chatId);
    //     document.append('document', file.buffer, {
    //         filename: file.originalname,
    //         contentType: file.mimetype,
    //     });

    //     const options = {
    //         method: 'POST',
    //         body: document,
    //     };

    //     const fileResponse = await fetch(fileUrl, options);

    //     const fileData = await fileResponse.json();

    //     console.log('File response:', fileData);

    //     // Delete file from disk
    //     fs.unlinkSync(file.path);
    // }

    res.status(200).json({ success: true });
}