import './Contact.css';

const Contact = () => {
    return (
        <>
        {/* Section 1 Start Here */}
        <div className="main-title">
            <div className="shadow"></div>
            <h2> تواصل معنا  </h2>
            <p> أينما ستكون سنكون بالقرب منك.</p>
        </div>

        {/* Section 2 Start Here */}

        <div className="contact-info">
            <h2>نسعد بتواصلكم معنا</h2>

            <div className="conttact-information">
                <div className="information">
                    <h1>💬</h1>
                    <p>دعنا نتحدث</p>
                    <small>جوال: +970592569040</small>
                </div>
                <div className="information">
                    <h1>📧</h1>
                    <p>راسلنا</p>
                    <small>info@hexacit.com</small>
                </div>
                <div className="information">
                    <h1>🕑</h1>
                    <p>خدمة العملاء</p>
                    <small>خدمة متواصلة على مدار الساعة</small>
                </div>
            </div>
        </div>

        {/* Section 3 Start Here */}

        <div className="contact-inputs">
            <img src="https://hexacit.com/images/formContact.jpg" alt="contact" />

            <div>
                <p>يسعدنا رؤيتك في أي وقت من 8:00 صباحًا إلى 5:00 مساءً ما عدا أيام الجمعة والسبت</p>
                <h1>اهلا وسهلا بك في أي وقت</h1>

                <input type="text" placeholder='الاسم كاملا' required />
                <input type="text" placeholder='الجوال' required />
                <input type="text" placeholder='الإيميل' required />
                <input type="text" placeholder='الموضوع' required />
                <input className='large-input' type="text" placeholder='الرسالة' required />
                
                <button>ارسال</button>
            </div>
        </div>

        {/* Section 4 Start Here */}

        <div className="need-project">
            <div>
                <p>هل تحتاج مشروع ناجح؟</p>
                <button>اطلب الان</button><br/>
                <small>أو تواصل معنا</small>
            </div>
        </div>
        </>
    )
}

export default Contact;