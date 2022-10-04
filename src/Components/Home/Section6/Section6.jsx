import './section6.css';

const Section6 = () => {
    return (
        <div className='section6'>
            <div className="company-state"><h1>احصائيات الشركة</h1> </div>
            <div className="company-state">
                <img src="https://hexacit.com/images/client.png" alt="" />
                <p>130</p>
                <h3>عملاء</h3>
            </div>
            <div className="company-state">
                <img src="https://hexacit.com/images/idea.png" alt="" />
                <p>200</p>
                <h3>مشاريع</h3>
            </div>
            <div className="company-state">
                <img src="https://hexacit.com/images/network.png" alt="" />
                <p>15</p>
                <h3>موظفين</h3>
            </div>
        </div>
    )
}

export default Section6;