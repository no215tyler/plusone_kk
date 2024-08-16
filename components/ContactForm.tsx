import React, { useState } from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSendMessage = async (e: any) => {
    e.preventDefault();
    console.log(`${name} / ${email} / ${message}`);
    const failedMessage =
      "メッセージの送信に失敗しました。問い合わせ先にご連絡ください。（代表）027-212-8093";

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        alert("メッセージが送信されました。");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(failedMessage);
      }
    } catch (error) {
      console.log("エラーが発生しました", error);
      alert(failedMessage);
    }
  };

  return (
    <div className={classes.body}>
      <section id="contact">
        <h1 className={classes.sectionHeader}>お問い合わせ</h1>
        <div className={classes.contactWrapper}>
          <form className={classes.formHorizontal} role="form">
            <div className={classes.formGroup}>
              <input
                type="text"
                className={classes.formControl}
                placeholder="NAME"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
              <input
                type="email"
                className={classes.formControl}
                placeholder="EMAIL"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <textarea
              className={classes.textarea}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <div className={classes.button}>
              <button
                className={classes.sendButton}
                type="submit"
                value="SEND"
                onClick={onSendMessage}
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
