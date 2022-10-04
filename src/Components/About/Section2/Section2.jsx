import './section2.css';

const Section2 = () => {
    return (
        <>
            {/* Sectio 2 Start Here */}

            <div className='about-section2'>
                <img  src='https://hexacit.com/uploads/1592726342_28248.gif' alt='descktop'/>

                <div className="content">
                    <p className='small-title'>خدمات متكاملة تعمل على إخراج عمل مثالي.</p>
                    <p className='big-title'>ملتزمون بنجاح عملائنا من بداية الفكرة حتى نجاحها وجعلها علامة تجارية</p>
                    <p className='description'>
                    نعمل في شركة هكسا لتكنولوجيا المعلومات بخطى ثابتة لتحسين خدماتنا  المقدمة في مجال تقنية المعلومات اعتماداً على طاقمنا المختص في مجالات البرمجة والتصميم والتسويق. ونسعى جاهدين لتربع على عرش شركات تقنية المعلومات. نحن فخورون بالعمل مع قاعدة كبيرة من العملاء والشركات الرئيسية.
                    </p>                
                    <a className='read-more' href="/ra" >اقرأ المزيد ←  </a>
                </div>
            </div>

            {/* Sectio 2 End Here */}

            {/* Sectio 3 Start Here */}

            <div className="about-section3">
                <p className='title1'>حلول تقنية رائدة في مجال تكنولوجيا المعلومات خالية من المشاكل والأخطاء</p>
                <p className='title2'>مجموعة واسعة من خدمات تطوير الويب والبرامج عبر العالم</p>

                <img className='img1' src="https://hexacit.com/images/disk.jpg" alt="hexa-images" />
                <img className='img2'src="https://hexacit.com/images/about-img2.jpg" alt="hexa-images" />

                <div className="about-text">
                    <div>
                        <h2 className='about-description1'>رؤيتنا واضحة ورسالتنا محددة بانضمامك كأحد عملاء هكسا نحن قادرون على جعل أفكارك إلى أعمال تقنية رائدة.</h2>
                    </div>
                    <div>
                        <h3>رؤيتنا</h3>
                        <p>الريادة في بناء الأعمال البرمجية الرقمية المتميزة، والتميز في التسويق الرقمي والعمل على تقريب الأفكار إلى حلول عملية إبداعية تجعل من عملائنا مميزين في مشاريعهم الرقمية.</p>
                    </div>
                    <div>
                        <h3>مهمتنا</h3>
                        <p>تقديم حلول مبتكرة لتكنولوجيا المعلومات والعمل على تقديم خدمة متكاملة  لعملائنا تنال أقصى درجات الرضا ابتداء من الفكرة حتى المنتج المتكامل.</p>
                    </div>
                </div>
            </div>

            {/* Sectio 3 End Here */}

            {/* Sectio 4 Start Here */}

                <div className="about-section4">
                    <div className="best-blog">
                        <p>اليك اروع المقالات في علوم التقنية</p>
                        <ul>
                            <li>✔<a href='2'>بلوكتشين</a></li>
                            <li>✔<a href='2'>المبادىء الصحيحة للبرمجة</a></li>
                            <li>✔<a href='2'>الذكاء الاصطناعي</a></li>
                            <li>✔<a href='2'>العلامة التجارية ما هي؟ وما أهميتها؟</a></li>
                            <li>✔<a href='2'>تهيئة محركات البحث (السيو)</a></li>
                            <li>✔<a href='2'>ما هي تصاميم الUI و الUX ؟ و ماهي العلاقة بينهما ؟</a></li>
                        </ul>
                    </div>
                    <img src="https://hexacit.com/images/about-img4.png" alt="img" />
                </div>

            {/* Sectio 4 End Here */}

            {/* Sectio 5 Start Here */}
                <div className="need-project">
                    <div>
                        <p>هل تحتاج مشروع ناجح؟</p>
                        <button>اطلب الان</button><br/>
                        <small>أو تواصل معنا</small>
                    </div>
                </div>
            {/* Sectio 5 End Here */}



        </>
    )
}

export default  Section2;