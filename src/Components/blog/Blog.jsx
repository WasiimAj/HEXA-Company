import './blog.css';

const Blog = () => {
    return (
        <>
        {/* Section 1 Start Here */}
        <div className="main-title">
            <div className="shadow"></div>
            <h2>المدونة</h2>
            <p> اليك اروع المقالات في علوم التقنية</p>
        </div>

        {/* Sidebar Section 2 Start Here */}

        <div className='blog'>
            <div className="blog-content">
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1584515034_94240.png" alt="blog1" />
                    <h4>البرمجيات</h4>
                    <h1>بلوكتشين</h1>
                    <span>2020-02-23</span>
                    <p> ما هي تقنية البلوكتشين ؟ نوع جديد من قواعد البيانات، وهي غير تقليدية أو كلاسيكية إذ هي لامركزية، وتوفر إدارة قائمة متزايدة باستمرار من السجلات الت...</p>
                </div>
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1581923183_46868.jpg" alt="blog1" />
                    <h4>البرمجيات</h4>
                    <h1>المبادىء الصحيحة للبرمجة</h1>
                    <span>2020-02-12</span>
                    <p>مبادئ البرمجة الصحيحة: تتم تسمية العديد من المفاهيم والأساليب الموجودة "مبادئ البرمجة". إنهم يهدفون إلى مساعدتك في كتابة الكود بطريقة معينة...</p>
                </div>
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1581923387_61810.jpg" alt="blog1" />
                    <h4>البرمجيات</h4>
                    <h1>الذكاء الاصطناعي</h1>
                    <span>2020-02-12</span>
                    <p> ما هو الذكاء الاصطناعي؟ الذكاء الاصطناعى هو فرع من فروع علوم الحاسوب تعددت تعاريفه. على سبيل المثال ، يمكن تعريفه على أنه "دراسة وتصميم الع...</p>
                </div>
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1551333541_96291.jpeg" alt="blog1" />
                    <h4>التسويق</h4>
                    <h1>العلامة التجارية ما هي ؟</h1>
                    <span>2019-02-28</span>
                    <p> وفي تعريف قاموس الأعمال، العلامة التجارية هي التزام من قبل شركة ما بالحرص على ثقة المستهلكين وولائهم لمنتجاتها أو خدماتها.  أما الصورة</p>
                </div>
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1549980148_87114.jpeg" alt="blog1" />
                    <h4>التسويق</h4>
                    <h1>تهيئة محركات البحث (السيو)</h1>
                    <span>2019-02-12</span>
                    <p>عملية أرشفة المواقع مهمة لضمان تحقيق الهدف من إنشاء الموقع وبشكل رئيسي تساعد ارشفة الموقع: تعريف المحركات بالموقع؛ لتوجيه الزوار </p>
                </div>
                <div className="bolger">
                    <img src="https://hexacit.com/uploads/1549454013_59663.jpeg" alt="blog1" />
                    <h4>التصميم</h4>
                    <h1>ما هي تصاميم الUI و الUX ؟</h1>
                    <span>2019-02-06</span>
                    <p>ولاً واجهة المستخدم User Interface واجهة المستخدم هي الواجهات التي تعرض على الشاشة، أي المنتج النهائي الذي يتم عرضه على المستخدم والذي</p>
                </div>  
            </div>
    
            <div className="new-content">
                <div className="Latest-topics">احدث الموضوعات</div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1584515034_94240.png" alt="ss" />
                    <h1>بلوكتشين</h1><br />
                    <span>2020-02-23</span>
                    <small>4564</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1581923183_46868.jpg" alt="ss" />
                    <h1>المبادىء الصحيحة للبرمجة</h1><br />
                    <span>2020-02-12</span>
                    <small>5519</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1581923387_61810.jpg" alt="ss" />
                    <h1>الذكاء الاصطناعي</h1><br />
                    <span>2020-02-12</span>
                    <small> 4104</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1551333541_96291.jpeg" alt="ss" />
                    <h1>العلامة التجارية ما هي؟ وما أهميتها؟</h1><br />
                    <span>2019-02-28</span>
                    <small>50070</small>
                </div>


                <div className="Latest-topics">الاكثر قراءة</div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1547647708_55600.jpeg" alt="ss" />
                    <h1>أعلى 4 علامات تجارية قيمة في عام 2018</h1><br />
                    <span>2019-01-16</span>
                    <small>8564</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1581923183_46868.jpg" alt="ss" />
                    <h1>المبادىء الصحيحة للبرمجة</h1><br />
                    <span>2020-02-12</span>
                    <small>5519</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1581923387_61810.jpg" alt="ss" />
                    <h1>الذكاء الاصطناعي</h1><br />
                    <span>2020-02-12</span>
                    <small> 4104</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1551333541_96291.jpeg" alt="ss" />
                    <h1>العلامة التجارية ما هي؟ وما أهميتها؟</h1><br />
                    <span>2019-02-28</span>
                    <small>50070</small>
                </div>
                <div className="topic">
                    <img src="https://hexacit.com/uploads/1542282849_14346.png" alt="ss" />
                    <h1>لماذا يحتاج مشروعك  إلى تطبيق   </h1><br />
                    <span>2018-10-22</span>
                    <small>70897</small>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Blog