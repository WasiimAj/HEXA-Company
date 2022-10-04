import './Work.css';

const Work = () => {
    return (
        <>

        {/* Section 1 Start Here */}
        <div className="main-title">
            <div className="shadow"></div>
            <h2>معرض أعمالنا</h2>
            <p>أعمال نفتخر بها</p>
        </div>

        {/* Section 2 Start here */}

        <div className="incres no-margin-top"></div>
            <div className='section4 '>
                <p className='small-project-title'>معرض اعمالنا المتميزة</p>
                <h2 className='header2'>اعمال نفخر بها</h2>
                <div className="works">
                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1604139001_23499.png" alt="project1" />
                        <div className="hover">
                            <p className='project-title'>اكام</p>
                            <p className='text-desc'>
                                تطبيق أكام الأول والرائد بتقديم الخدمات المتكاملة في مجال العقارات، لبناء اقتصاد تشاركي يُجمع به الأشخاص المتخصصين والمهتمين في العقارات وتشييدها وتخطيطها يُعتبر ميزة فارقة وتوسّع حقيقي لتقديم الخدمات لأكبر قدر ممكن وبناء مجتمع ضخم
                            </p>
                        </div>
                    </div>
                    <div className="work">
                        <img className='project-images' src="https://hexacit.com/uploads/1633863066_23768.png" alt="project2" />
                        <div className="hover">
                            <p className='project-title'>تطبيق سكيبر فلاي</p>
                            <p className='text-desc'>تطبيق سكيبر فلاي تطبيقات لكل من Android و IOS ، توفر طريقة فريدة تمامًا للمسافرين ومرشدي السفر للتواصل.سكيبر فلاي
                            </p>
                        </div>
                    </div>
                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1655272298_11208.jpg" alt="project2" />
                        <div className="hover">
                            <p className='project-title'>  BlueDrop  </p>
                            <p className='text-desc'>                            
                                مشروع توصيل المياه                                
                            </p>
                        </div>
                    </div>
                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1655361246_98064.jpeg" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>  المتميزون  </p>
                            <p className='text-desc'>                            
                            مؤسسة المتميزون الحديثة
                            </p>
                        </div>
                    </div>
                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1655281891_49392.jpg" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>  فسيلة  </p>
                            <p className='text-desc'>                            
                            فسيلة
                            </p>       
                        </div>                
                    </div>
                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1655361124_58911.jpg" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>  SMART VALET PARKING APP</p>
                            <p className='text-desc'>                            
                                Smart Valet Parking App
                            </p>
                        </div>
                    </div>

                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1603701293_94216.jpg" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>تك تك</p>
                        <p className='text-desc'>                            
                            اسرع طريقة للتسوق ، نقوم بالتوصيل إلى اي مكان وزمان
                        </p>
                        </div>
                    </div>

                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1632822443_54016.png" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>نور ديلفيري  </p>
                            <p className='text-desc'>                            
                                هل تبحث عن أسرع طريقة لتوصيل للطعام؟ أصبح الطلب أسهل مع تطبيق نور ديليفري الجديد
                            </p>
                        </div>
                    </div>

                    <div className="work">
                        <img className='project-images'  src="https://hexacit.com/uploads/1602419238_78345.jpg" alt="project2" />
                        <div className="hover">
                        <p className='project-title'>قيلة</p>
                            <p className='text-desc'>                            
                                تطبيق تم تصميمه وتطويره لمنحك تجربة متكاملة للرحلات البرية.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        {/* Section2 Start Here */}

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

export default Work