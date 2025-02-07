import Link from 'next/link';

const iconDataBlog = [
    {icon:'flaticon-blueprint', name:'Architecture & Interior'},
    {icon:'flaticon-briefing', name:'Project Planning'},
    {icon:'flaticon-home', name:'Product Design'},
    {icon:'flaticon-concept', name:'Custom Solutions'},
];

const ProviderBlog = () => {
    return (
        <div className="row">
            {iconDataBlog.map((item, i)=>(
                <div className="col-lg-3 col-md-6 aos-item" data-aos="flip-down" data-aos-duration="1500" data-aos-delay="400" key={i}>
                    <div className="icon-bx-wraper bx-style-1 style-9 m-b30 p-a30" data-name="1.">
                        <div className="icon-bx-sm radius m-b20"> 
                            <Link href="#" scroll ={false} className="icon-cell"><i className={item.icon} /></Link> 
                        </div>
                        <h4 className="title m-b15"><Link href="/services-details">{item.name}</Link></h4>
                        <p>Duis laoreet dui at eros scelerisque, in lacinia neque</p>
                    </div>
                </div>
            ))}                        
        </div>
    );
};

export default ProviderBlog;