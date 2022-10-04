import './Services.css';

const Serveices = () => {
    return (
        <>
            <div className="main-title">
            <div className="shadow"></div>
                    <h2>خدماتنا</h2>
                    <p>خدمات متميزة بأيدي خبراء التقنية</p>
            </div>

            {/* Section1 start Here */}

            <div className="servecis-main-div">
                <h3>خدمات تقنية متكاملة</h3>
                <h1>نسعد بانضمامكم كأحد عملاء هكسا الدائمين</h1>

                <div className="services-galary">
                    <div>
                        <img src="https://hexacit.com/images/tech1.jpg" alt="service1" />
                        <h2>التصميم</h2>
                        <p>نقدم لك تصاميمًا جديدة بذوق ورونق خاص يليق بموقعك، تصميمًا خاليًا من الأخطاء القياسية.</p>
                    </div>
                    <div>
                        <img src="https://hexacit.com/images/tech2.jpg" alt="service1" />
                        <h2>البرمجيات</h2>
                        <p>أحدث لغات البرمجة وأقواها على أيدي متخصصي البرمجة ذوي الكفاءة والخبرة العالية.</p>
                    </div>
                    <div>
                        <img src="https://hexacit.com/images/tech3.jpg" alt="service1" />
                        <h2>التسويق</h2>
                        <p>نوفر لك أسلوباً فريداً ومتميزاً يعمل على نشر علامتك التجارية عبر خطط مدروسة وبأيدي خبراء التسويق لدينا.</p>
                    </div>
                </div>
            </div>

            {/* Section 2 Start Here */}

            <div className="services-info">
                <div className="services-info-img"></div>
                <div className="services-info-ul">
                <ul>التسويق
                    <li>خطط تسويقية احترافية </li>
                    <li>تهيئة المواقع للأرشفة SEO </li>
                    <li>إدارة صفحات التواصل الاجتماعي.</li>
                    <li>حملات إعلانية ممولة.</li>
                </ul>
                <ul>البرمجيات
                    <li>برمجة مواقع إلكترونية.</li>
                    <li>برمجة تطبيقات الهواتف الذكية.</li>
                    <li>تحليل الأنظمة.</li>
                </ul>
                <ul>التصميم
                    <li>تطبيقات الويب.</li>
                    <li>تطبيقات الموبايل.</li>
                    <li>تصميم هوية تجارية للشركات.</li>
                    <li>تصاميم جرافيك.</li>
                </ul>
                </div>
            </div>
            
            {/* Section 3 Start Here */}

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

export default Serveices;