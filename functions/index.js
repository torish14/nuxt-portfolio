// const functions = require('firebase-functions')
const functions = firebase.app().functions('asia-northeast1')
// const nuxtServer = require('./nuxt-server')
const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email
const cors = require('cors')({ origin: true })

// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

// 管理者用メールアドレス
const adminContents = (data) => {
  return `I received a contact from the website with the following contents.

name:
${data.name}

email:
${data.email}

contents:
${data.contents}
`
}

exports.sendMailNew = functions.region('asia-northeast1').https.onCall((data, context) => {
  // メール設定
  const adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: 'contact form',
    text: adminContents(data)
  }

  // 管理者へのメール送信
  cors(mailTransport.sendMailNew(adminMail, (err, info) => {
    if (err) {
      return console.error(`admin send failed. ${err}`)
    }
    return console.log('admin and user success')
  }))
})

// exports.nuxtServer = functions.https.onRequest(nuxtServer)
