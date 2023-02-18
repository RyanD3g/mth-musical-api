import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { Imail, ISendMail } from '../Imail.provider';
import { config } from 'dotenv';

config();

export class MailService implements ISendMail{
    private transporter: Mail;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 2525,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    };

    async sendMail(message: Imail): Promise<void> {
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.address,
            },
            from:{
                name: message.from.name,
                address: message.from.address,
            },
            subject: message.subject,
            html: message.body,
        });
    };
};
