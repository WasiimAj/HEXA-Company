import './Section3.css';

const Section3 = () => {
    return (
        <div className='section3'>
            <div className="show">
                <img className='icons' src="https://hexacit.com/images/market.png" alt="show1" />
                <p  className="title">التسويق</p>
                <p className='text-content'>
                نوفر لك أسلوباً فريداً ومتميزاً يعمل على نشر علامتك التجارية عبر خطط مدروسة وبأيدي خبراء التسويق لدي...
                </p>
            </div>
            <div className="show">
                <img className='icons' src="https://hexacit.com/images/design.png" alt="show2"  />
                <p className="title">التصميم</p>
                <p className='text-content'>نقدم لك تصاميمًا جديدة بذوق ورونق خاص يليق بموقعك، تصميمًا خاليًا من الأخطاء القياسية.</p>
            </div>
            <div className="show">
                <img className='icons' src="https://hexacit.com/images/mobile.png" alt="show3"  />
                <p className="title">البرمجيات</p>
                <p className='text-content'>أحدث لغات البرمجة وأقواها على أيدي متخصصي البرمجة ذوي الكفاءة والخبرة العالية.</p>
            </div>
        </div>
    )
}

export default Section3