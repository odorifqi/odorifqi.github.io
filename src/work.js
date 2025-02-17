import React from "react";
import s from "./output.css";
import img1 from "./img-thumb/image-6.png";
import img2 from "./img-thumb/titip.png";
import img3 from "./img-thumb/shoes.png";
import img4 from "./img-thumb/sia.png";
import img5 from "./img-thumb/fgdd.png";
import img6 from "./img-thumb/chatapp.png";
import { TbArrowUpRight } from "react-icons/tb";

function WorkCard({ title, url, img, source }) {
    return (
        <div className={ s.workCard }>
            <div className={ s.cardBody }>
                <img src={ img } className={ s.workImage } />
            </div>
            <div className={ s.cardFooter }>
                <div className={ s.workTitle }>{ title }</div>
                <a href={ url } className={ s.workbtn } target="_blank" rel="noreferrer">
                    View in { source }
                    <TbArrowUpRight className={ s.iconArrow } />
                </a>
            </div>
        </div>
    );
}

export default function WorkCardList() {
    return (
        <div className={ s.workWrapper }>
            <h2 className={ s.headline }>Recent works</h2>
            <div className={ s.workCardList }>
                <WorkCard
                    img={ img1 }
                    title="Case study: learn, create, mentor in workout app"
                    url="https://bootcamp.uxdesign.cc/case-study-learn-create-mentor-in-workout-app-292d9509a8b9"
                    source={ "Medium" }
                />
                <WorkCard
                    img={ img2 }
                    title="Case study: “Shopping list” for e-commerce"
                    url="https://bootcamp.uxdesign.cc/titip-shopping-list-for-an-online-marketplace-case-sample-tokopedia-6b418a31e881"
                    source={ "Medium" }
                />
                <WorkCard
                    img={ img3 }
                    title="UI Design: Shoes Website"
                    url="https://dribbble.com/shots/18587017-Shoe-Website-Adidas"
                    source={ "Dribbble" }
                />
                <WorkCard
                    img={ img4 }
                    title="UI Design: Information System - Student Management"
                    url="https://www.behance.net/gallery/145149785/Information-System-Student-Management-UIUX-Design"
                    source={ "Behance" }
                />
                <WorkCard
                    img={ img5 }
                    title="UI Design: Company website Landing Page"
                    url="https://www.behance.net/gallery/145777301/Company-website-UIUX-Design"
                    source={ "Behance" }
                />
                <WorkCard
                    img={ img6 }
                    title="UI Design: Schedule an event in a chat app"
                    url="https://dribbble.com/shots/18395464-Schedule-an-Event-in-a-Chat-app"
                    source={ "Dribbble" }
                />
            </div>
        </div>
    );
}
