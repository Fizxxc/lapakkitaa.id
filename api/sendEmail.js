import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email wajib diisi" });
  }

  try {
    await sendgrid.send({
      to: email,
      from: "fizzxdevv@any.pink", // ganti dengan email/domain yg diverifikasi di SendGrid
      subject: "Berhasil Subscribe — LapakKita.id 🎉",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;">
          <h2 style="color:#7c3aed">Terima kasih sudah subscribe!</h2>
          <p>Halo <b>${email}</b>,</p>
          <p>Kamu berhasil terdaftar di <b>LapakKita.id</b>. Kami akan kabari kamu saat fitur chat dibuka kembali 🚀</p>
          <br/>
          <p style="color:#555;font-size:12px">Email ini dikirim otomatis oleh sistem LapakKita.id</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email terkirim" });
  } catch (err) {
    console.error("SendGrid Error:", err);
    return res.status(500).json({ success: false, message: "Gagal kirim email" });
  }
}
