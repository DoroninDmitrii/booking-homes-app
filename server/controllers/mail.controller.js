// comntrolller

const nodemailer = require('nodemailer');

async function sendCreatedReservationMail(to, dataOrder, house) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER_SHARE,
      pass: process.env.SMTP_USER_PASSWORD,
    },
  });

  const mail = await transporter.sendMail({
    from: process.env.SMTP_USER_SHARE,
    to,
    subject: `Подтверждение бронирования в EcoPark с сайта ${process.env.API_CLIENT_URL}`,
    text: '...',
    html: `
      <div>
        <h1>Вы успешно забронировали номер в EcoPark!</h1>
        <p>Ваш домик: <b>${house.name}</b></p>
        <p>Дата заезда: <b>${dataOrder.dataIn}</b></p>
        <p>Дата выезда: <b>${dataOrder.dataOut}</b></p>
        <p>Общая сумма: <b>${dataOrder.summa} &#8381;</b></p>
        <p>Для отмены бронирования свяжитесь с администратором</p>
        <p>Ждем вас для лучшего отдыха!</p>
      </div>
      `,
  });
  return mail;
}

module.exports = { sendCreatedReservationMail };
