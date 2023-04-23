import * as nodemailer from 'nodemailer'
import mailConfig from "../config/Mail";

class Mail {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: mailConfig.host,
            port: mailConfig.port,
            auth: mailConfig.auth.user ? mailConfig.auth : null,
        })
    }

    sendEmail(message: any) {
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message
        })
    }
}

export default new Mail();