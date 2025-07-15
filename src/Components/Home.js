import { useState } from 'react'; 
import { Button, Image, } from 'react-bootstrap'
import Slider from 'react-slick';
import HeaderImg from '../Assets/HeaderImg.png';
import BannerImg from '../Assets/BannerBack.png';
import ImgSkills from '../Assets/CardImg3.png';
import ImgExprience from '../Assets/CardImg2.png';
import ImgResponsible from '../Assets/CardImg1.png';
import LandingImg from '../Assets/LandingImg.png';
import GroundImage from '../Assets/GroundImg.png';

const Home = () => {

    const [showCards, setShowCards] = useState(false);

    const handleClick = () => {
      setShowCards(!showCards);
    };

    const [isVisible, setIsVisible] = useState(false);

    const handleOnclick =() =>{
      setIsVisible(!isVisible);
    }

    const [isView, setIsView] = useState(false);

    const handleClicked = () => {
      setIsView(!isView);
    }

    const [formData, setFormData] = useState(
      {
        name:'',
        email:'',
      }
    );

    const handleChange =(event) =>{
      const {name,value} = event.target;
      setFormData(prevState => ({...prevState, [name]: value}));
    }

  

    const [inputValue, setInputValue] = useState(
      {
        example:''
      }
    )

    const handleOnChange =(e) =>{
      const{name, value} = e.target;
      setInputValue(prevState=>({...prevState, [name]:value}))
    }

    const settings ={
      dots: true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true,
      autoplaySpeed:3000,
    }

    const textItems =[
      "Hire me as FreeLancer",
      "For Contract Based Works",
      "For Individual Projects",
      "Get me As Full Time Worker",
    ]

  return (
    <>
    <section className='header bg-back py-5 mx-auto' id='home'>
        <div className='container'>
            <div className='row'>
              <div className='aside'>
                <div className='position-relative'>
                  <div className='position-absolute end-50 start-0 translate-middle-x'>
                    <h4 className='text-primary headeraside py-5'>MERN STACK</h4>
                  </div>
                </div>
              </div>
                <div className='col-sm'>
                    <h1 className='text-primary heading f1-prime py-4 px-3'>DEVELOPER</h1>
                    <h5 className='text-primary f1-prime py-5 px-5'>I'M A FULL STACK
                    <br/>DEVELOPER</h5>
                </div>
                <div className='col-sm'>
                    <Image className='headerImg py-5 mx-auto' src={HeaderImg} alt='headerImage' />
                </div>
                <div className='col-sm'>
                    <h6 className='text-primary py-5 mx-auto'>IT'S JUST A BEGINNING</h6>
                    <p className='text-primary mx-auto'>
                    Experienced full-stack Java developer with 1 years of hands-on practice, in search of an opportunity to
                    apply my knowledge and refine my skills in the development of robust and scalable software
                    solutions. I thrive on delivering high-quality code and excel at fostering effective collaboration within
                    multifaceted teams to achieve project objectives. I am eagerly looking forward to tackling new
                    challenges and advancing my career in a dynamic and innovative work environment. 
                    </p>
                    <Button className='btn-primary'>Let's Start</Button>
                </div>
            </div>
        </div>
    </section>

    <section className='banner bg-back py-5 mx-auto' id='blog'>
        <div className='container'>
            <div className='row'>
            <div className='position-relative'>
                    <div className='position-absolute top-50 start-50 translate-middle-x'>
                        <Image className='bannerImg' src={BannerImg} alt='Bannerimg' />
                    </div>
                    <div className='position-absolute top-50 start-0 translate-middle-x'>
                      <h5 className='text-primary py-5 mx-auto banneraside1'>DEVELOP YOUR SKILLS</h5>
                    </div>
                    <div className='position-absolute top-50 end-0  traslate-middle-x'>
                      <h5 className='text-primary py-5 mx-auto aside-head2'>DEVELOP YOUR SKILLS</h5>
                    </div>
                </div>
                <h2 className='text-secondary text-center py-5 mx-auto'>
                    WHAT
                    <br/>
                    <span>I've</span>
                    <br/>
                    ACHIEVED         
                </h2>
                <div className="container text-center mt-5">
      <Button className="btn btn-primary mb-4" onClick={handleClick}>
      {showCards ? 'READ LESS' : 'READ MORE'}
      </Button>
      {showCards && (
        <div className='container'>
            <div className='abt-head'>
                <h2 className='text-primary text-start py-5'>FIND <span>MY ACHIEVED</span></h2>
            </div>
            <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className='card1'>
              <Image className='cardimg justify-contents-center' src={ImgSkills} alt='CardIcon' />
              <div className="card-body">
                <h5 className="card-title text-primary py-2">SKILLS</h5>
                <hr className='line' />
                <p className="card-text card-para">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>JQuery</li>
                    <li>JSon</li>
                    <li>Bootstrap</li>
                    <li>React JS</li>
                    <li>Express JS</li>
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <br/>
                  </ul>
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className='card1'>
              <Image className='cardimg justify-contents-center' src={ImgExprience} alt='CardIcon' />
              <div className="card-body">
                <h5 className="card-title text-primary py-2">EXPRIENCE</h5>
                <hr className='line' />
                <p className="card-text card-para">
                  <ul>
                    <li>I am a strong advocate for software quality, actively engaging in code review and rigorous testing to ensure top-notch, error-free software.</li>
                    <li>My actively engage in code reviews and rigorous testing, ensuring top-notch, error-free software delivery. </li>
                    <li> Strong at troubleshooting and resolving database-related issues, ensuring data integrity and security </li>
                    <li>Effective communicator and collaborator, capable of translating business requirements into effective database solutions.</li>
                    <li>Implemented state management using Redux for efficient data flow and application scalability.</li>
                  </ul>
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
            <div className='card1'>
            <Image className='cardimg justify-contents-center' src={ImgResponsible} alt='CardIcon' />
              <div className="card-body">
                <h5 className="card-title text-primary py-2">RESPONSIBLE</h5>
                <hr className='line' />
                <p className="card-text card-para">
                  <ul>
                    <li>Enforced best practices and coding standards to create clean, well-designed code. </li>
                    <li>Develop and maintain RESTful, integrating them with the front-end and third-party services.</li>
                    <li>Specialize in front-end development, building user-friendly and responsive web applications using Java, HTML, CSS, JavaScript, and React.</li>
                    <li>Build and sustain front-end applications with a focus on user experience. </li>
                    <li>Adhere to best practices and coding standards to ensure clean, well-designed code. </li>
                    <br/>
                  </ul>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>   
      )}
    </div>
            </div>
        </div>
    </section>
    <section className='landing bg-back py-5 mx-auto' id='about'>
        <div className='container'>

          <div className='row'>
            <div className='col-lg-6'>
              <h2 className='text-primary py-5 mx-3'>About <span className='landhead'>me</span></h2>
              <p className='text-primary py-3 mx-3'>
                I'm Deepan. I'm a Full Stack Developer. I have one year exprience in React js and Frontend Develop.
                I have completed three projects successfully. Also I have helped college students with project works.
                Also worked on three domain product based works. I have also worked under WIX STUDIO for official site company.
                Good knowledge in React JS and UI & UX design. I am good in Object Orientend Programming language and Database.
              </p>
              <div className='container'>
                {isVisible && (
                  <div className='text-start'>
                    <p className='text-primary'>
                    I'm doing 2 upcoming projects based on Full Stack in Freelance & going to create frontend using React Js framework.
                    To run this project on backend I'm going to use Express Js and Node Js, this project is completely related to Architechture.
                    This project will surely be user friendly & will reach out well among the customers broadly, the Organization which assigned me this project
                    has successfully completed 150+ project in the field of Architechture.
                    </p>
                  </div>
                )
                }
              <Button className='btn-primary' onClick={handleOnclick}>{
                isVisible ? 'LESS':'SHOW'
              }</Button>
              </div>
            </div>
            <div className='col-lg-6'>
              <Image className='LandingImage py-5 mx-auto' src={LandingImg} alt='landingImg' />
            </div>
          </div>
        </div>
    </section>
    <section className='ground bg-back py-5 mx-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
              <Image className='groundImg py-5 mx-auto' src={GroundImage} alt='groundImg' />
          </div>
          <div className='col-lg-6'>
            <h2 className='text-primary py-5 mx-3'>WHY <span className='landhead'>choose me</span></h2>
            <p className='text-primart py-2 mx-3'>
              I have good knowledge in Full Stack. I have completed 3 product based website and is running successfully in onsite.
              while creating this website i honestly coperated well to my team.
            </p>
            <div className='container'>
                {isView && (
                  <div className='text-start'>
                    <p className='text-primary'>
                      <span className='parahead'>PROJECT 1: AUCUST STUDIO</span> This is an official website. 
                      I used WIX STUDIO domain to create this website.
                      <br/>
                      <span className='parahead'>PROJECT 2: PROSHIELDFLIMS</span> This is a product based website.
                      I used shopify domain to create this website. This website is use to buy PPF Shield online and to claim warranty.
                      <br/>
                      <span className='parahead'>PROJECT 3: 3KICKS</span> This is also a product based website, I used shopify domain to create
                      this website. This is created to buy hand made miniature and accessories online. PROJECT 2 & 3 are applicable only to dubai
                      citizens.
                    </p>
                  </div>
                )
                }
              <Button className='btn-primary' onClick={handleClicked}>{
                isView ? 'LESS':'SHOW'
              }</Button>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='contact bg-back py-5 mx-auto' id='contact'>
      <div className='container'>
        <div className='row'>
          <h2 className='text-primary text-center py-3 mx-auto'>SUBSCRIBE</h2>
          <h3 className='text-light text-center py-2 mx-auto'>to our newsletter</h3>
              <div>
                <Slider {...settings}>
                  {textItems.map((text,index) => (
                    <div key={index}><h3 className='text-primary text-center py-2'>{text}</h3></div>
                  ))
                  }
                </Slider>
              </div>
          <div className='form-container py-5'>
          <form className='centered-form py-5'>
              <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name...' required />
              <br/>
              <br/>
              <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email...' required />
              <br/>
              <br/>
              <Button type='submit'className=' btn-primary d-flex justify-contents-center align-items-center mx-auto'>SUBSCRIBE</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className='footer py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
              <h4 className='text-primary px-4'>About</h4>
              <ul className='about py-3'>
                <li><a href='#career'>Career</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#privacy&policy'>Privacy & Policy</a></li>
              </ul>
          </div>
          <div className='col-lg-4'>
            <h4 className='text-primary px-4'>Contact</h4>
            <ul className='contact py-3'>
              <h6 className='text-primary'>Deepan</h6>
              <li><h6 className='text-primary'>Phone No:<a href='#no'> 9791260055</a></h6></li>
              <li><h6 className='text-primary'>Mail:<a href='#mail'> deepanuca007@gmail.com</a></h6></li>
              <li><h6 className='text-primary'>Address:<a href='#address'> 1078, TNHB Colony,Thoppur,Madurai-8</a></h6></li>
            </ul>
          </div>
          <div className='col-lg-4'>
          <a href='https://wa.me/qr/TZ6PE2Q6BW4QF1'><i className='bi bi-whatsapp'></i></a>
          <a href='https://www.instagram.com/mischief_kutty_?igsh=enEwbnBtdWRmNXBv'><i className='bi bi-instagram'></i></a>
            <i className='bi bi-linkedin'></i>
            <i className='bi bi-facebook'></i>
            <div className='py-4'>
              <input className='footinput' type='text' name='example' value={inputValue.example} onChange={handleOnChange} placeholder='example@mail.com' required />
              <button className='btn-secondary my-4' type='submit'>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}

export default Home
