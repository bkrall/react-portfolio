import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// UI components
import { Header } from 'components/Header';
import { BrowserHeader } from 'components/BrowserHeader';
import { Gig } from 'components/Gig';
import { FeaturedWork } from 'components/FeaturedWork';

import { Tools } from 'components/Tools';
import { Footer } from 'components/Footer';

const metaData = {
  title: 'Brian Krall, Sr. UI Developer in Chicago',
  description: '8+ Years of front-end development experience',
  meta: {
    charset: 'utf-8',
  },
};

export class Home extends Component {

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />

        <Header />

        <div className="container">
          <div className="col-xs-12">
            <BrowserHeader
              showBioPic
              title={["I am a Senior UI Developer.",
                      <span className="explainer"> Front-end development, responsive interfaces, large-scale CSS and JS.</span>
                    ]}
              headingClassString="text-left"
              titleClass="home"
            />
          </div>
        </div>

        <section className="container">
            <div className="row">
              <div className="col-md-9">

              {/* Whittl */}
              <Gig
                companyLogo="http://sideproject.io/content/images/2016/09/logo_whittl.png"
                companyName="Whittl"
                position="Sr. UI Developer"
                date="January 2015 - September 2016"
                location="Chicago, IL"
                description={["Whittl is like OpenTable but for salons, spas and barbershops. Check out our article in  ", <a href="https://techcrunch.com/2015/06/25/whittl-picks-up-a-chicago-style-3-3m-series-a/" target="_blank">TechCrunch</a>,". There I was responsible for providing a unifying voice for design and engineering teams. That includes collaborating with our cofounders, designers and engineers to build new features and maintain the web app. Tools used include React, Node.js, Jade templating and Sass. Obsessive focus on performance and usability.", <p> <a href="https://www.whittl.com" target="_blank">Whittl</a> shutdown in Sept. 2016. We're leaving our <a href="http://itf8392.pagekite.me/start" target="_blank">staging server</a> up to showcase the team's work.</p>]}
               >

                  {/* sub-component */}
                  <FeaturedWork
                    featuredWorkTitle="Featured Project"
                    featuredCase="Yelp Partnership"
                    featuredCaseLink="https://www.yelpblog.com/2016/06/yelp-platform-100000-businesses-5-new-transaction-partners"
                  >

                  </FeaturedWork>

               </Gig>

              {/* Duo Consulting */}
              <Gig
                companyLogo="http://sideproject.io/content/images/2016/09/logo_duo.png"
                companyName="Duo Consulting"
                position="Sr. Front-end Developer"
                date="September 2012 - December 2014"
                location="Chicago, IL"
                description="Lead front-end developer on Drupal-based projects, architecting sites, optimizing for performance, and writing maintainable and scalable HTML5/CSS3 and JavaScript/jQuery. Responsive web design."
               >

                 <FeaturedWork
                   featuredWorkTitle="Featured Case Study"
                   featuredCase="Bloomberg Current"
                   featuredCaseLink="https://www.duoconsulting.com/work/bloomberg"
                 >
                 {/* Projects in list */}
                 <ul>
                   <li><a href="https://www.duoconsulting.com/work/principal" target="_blank">Principal</a></li>
                   <li><a href="https://www.duoconsulting.com/work/much-shelist" target="_blank">Much Shelist</a></li>
                   <li><a href="https://www.duoconsulting.com/work/freeborn" target="_blank">Freeborn</a></li>
                 </ul>
                 </FeaturedWork>
               </Gig>

               {/* liQuidprint */}
               <Gig
                 companyLogo="http://sideproject.io/content/images/2016/09/logo_liquidprint.png"
                 companyName="liQuidprint"
                 firstGig
                 position="Front-end Developer"
                 date="January 2008 - September 2012"
                 location="Lincolnwood, IL"
                 description="Front-end web development over a variety of different technologies and CMSs across several different industries in a team environment. Resource managementand mentoring. Evolved from new grad to senior-level management"
                >

                  <FeaturedWork
                    featuredWorkTitle="Featured Case Study"
                    featuredCase="American Sale"
                    featuredCaseLink="http://www.liquidprint.com/clientprojects/american-sale.aspx"
                  >
                  {/* Projects in list */}
                  <ul>
                    <li><a href="http://www.liquidprint.com/clientprojects/hanig's-footwear.aspx" target="_blank">Hanig's Footwear</a></li>
                    <li><a href="http://www.liquidprint.com/clientprojects/perspectives.aspx" target="_blank">Perspectives</a></li>
                    <li><a href="#" target="_blank">Baird & Warner</a></li>
                  </ul>
                  </FeaturedWork>

                {/* Download resume */}
                <div className="row">
                  <div className="button-container" style={{ textAlign: 'left'}}>
                      <a href="https://github.com/bkrall/react-portfolio/raw/master/src/assets/bkrall_resume_2016.pdf" target="_blank">
                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; Download resume
                      </a>
                  </div>
                </div>

                </Gig>



            </div>

            <div className="col-md-3">

              <div className="sidebar-title">My writing on the web</div>
              <ul style={{ background: '#fff', padding: '15px 20px'}}>
                <li><a href="http://sideproject.io/" target="_blank">Sideproject.io</a> - Personal blog on web and front-end dev trends</li>
                <li><a href="http://blog.invisionapp.com/from-agency-pro-to-startup-newbie-developer-edition/" target="_blank">InVision App Blog</a> - From Agency Pro to Startup Newbie</li>
                <li><a href="https://www.smashingmagazine.com/2014/05/team-collaboration-closing-efficiency-gaps-responsive-design/" target="_blank">Smashing Magazine</a> - Team Collaboration And Closing Efficiency Gaps In Responsive Design</li>
                <li><a href="https://the-pastry-box-project.net/brian-krall/2014-february-19" target="_blank">The Pastry Box</a> - Go with your gut</li>
                <li><a href="https://medium.com/@bkrall/why-i-became-a-front-end-web-developer-64dfa138cd89#.nooqhbr1f" target="_blank">Medium</a> - Why I became a front-end developer</li>
              </ul>

              <Tools />
            </div>


          </div>

        </section>

        {/* Footer */}
        <Footer />

      </section>

    );
  }
}
