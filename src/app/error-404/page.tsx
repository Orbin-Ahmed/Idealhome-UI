import Link from 'next/link';
import IMAGES from '../../component/theme';
import Pagebanner from '../../element/Pagebanner';
import Mainlayout from '../../component/Mainlayout';

const Error404 = () => {
    return (
        <Mainlayout>
            <div className="page-content bg-white">		
                <div className="dz-bnr-inr style-1 overlay-white-dark" style={{backgroundImage: `url(${IMAGES.BanerImg6.src})`}}>                
                    <Pagebanner maintitle='404' currenttitle='404' parent='Home' />		
                </div>
                <section className="content-inner line-img">
                    <div className="container">
                        <div className="error-page text-center">
                            <div className="dlab_error">404</div>
                            <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                            <Link href="/" className="btn btn-primary radius-no"><span className="p-lr15">BACK TO HOMEPAGE</span></Link>
                        </div>
                    </div>
                </section>            
            </div>
        </Mainlayout>
    );
};

export default Error404;