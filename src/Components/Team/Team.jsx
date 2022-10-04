import './Team.css';

const Team = () => {
    return (
        < > 
        {/* Section 1 Start Here */}
        <div className="main-title">
            <div className="shadow"></div>
            <h2> فريقنا المتميز</h2>
            <p> فريق رائع قادر على جعل الخيال جزء من الواقع</p>
        </div>

        {/* Section 2 Start Here */}
        <div className="mangement-team">
            <h1>الفريق الاداري</h1>
            <p>عندما تجد الإدارة اللامعة، يولد الإبداع</p>

            <div className="team-images">
                <div>
                    <img src='https://hexacit.com/uploads/1561277688_50221.jpeg' alt='team1' />
                    <h1>أحمد نافذ فسيفس</h1>
                    <p>نائب المدير ومدير المبيعات</p>
                </div>
                <div>
                    <img src='https://hexacit.com/uploads/Abu-wasem.png' alt='team1' />
                    <h1> عماد عبد المنعم    </h1>
                    <p> مدير مشاريع      </p>
                </div>
                <div>
                    <img src='https://hexacit.com/uploads/1657971599_40429.jpg' alt='team1' />
                    <h1>نوح نافذ فسيفس</h1>
                    <p> الرئيس التنفيذي للعمليات      </p>
                </div>
                <div>
                    <img src='https://hexacit.com/uploads/1599129763_15697.jpg' alt='team1' />
                    <h1>     طارق زياد الزعيم</h1>
                    <p>       قائد الفريق</p>
                </div>
            </div>

        </div>

        {/* Section 3 Start Here */}

        <div className="manger">
            <div className="container">
                <img src="https://hexacit.com/uploads/1539676248_36157.png" alt="manger" />

                <div className="manger-word">
                    <h2>مرحبا بكم في شركة هكسا لتكنولوجيا المعلومات، نحن سعداء بزيارتكم موقعنا.</h2>

                    <p>" أهلا وسهلا بكم في شركة هكسا لتقنية المعلومات سعيدون بزيارتكم لموقعنا الإلكتروني. في هكسا نتطلع للريادة في بناء الأعمال البرمجية الرقمية المتميزة، والتميز في التسويق الرقمي والعمل على تقريب الأفكار إلى حلول عملية إبداعية تجعل من عملائنا مميزين في مشاريعهم الرقمية. طموحاتكم وتطلعاتكم وثقتكم جميعها نسعى لتحقيقها من خلال خدمات الحلول الرقمية التي نقدمها وفريق العمل الذي يعمل على مدار الساعة لإرضائكم. رضاكم وراحتكم هدفنا."</p>
                    <img className='manger-accept' src="https://hexacit.com/images/signature-dark.png" alt="twqe3" />                    
                    <br /><br /><br /><br /><br />
                    <h3>محمد نافذ فسيفس</h3>  
                    <small>المدير العام</small>                  
                </div>
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
        </ >
    )
}

export default Team;