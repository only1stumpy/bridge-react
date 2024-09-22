import React from "react";
import logo_header from '../img/logo-header.png';
import dollar from '../img/dollar-logo-header.png'
import lightning from '../img/lightning-logo-header.png'
import hashtag from '../img/hashtag-logo-header.png'
import smile from '../img/smile-logo-header.png'
import appstore_header from '../img/app-store-mini.png'
import playstore_header from '../img/play-store-mini.png'
import main from '../img/main-title.png'
import bridgegiant from '../img/logo-giant.png'
import star from '../img/star-separator-logo.png'
import dollargold from '../img/gold-dollar.png'

const appstore = "https://apps.apple.com/us/app/skibidi-war-toilets-attack/id6449440948";
const playstore = "https://play.google.com/store/apps/details?id=com.CabinaGames.ToiletFight&hl=ru&pli=1"
export default function Home(){
    return(
        <div>
            <header>
                <div className="flex flex-row h-[100px] items-center justify-between">
                    <a href="#"><img src={logo_header} alt="Bridge" className="ml-[50px]"/></a>
                    <div className="flex flex-row w-[254px] justify-between *:size-[55px] *:flex *:items-center *:justify-center *:bg-[#262626] *:rounded-lg hover:*:bg-[#535353] *:transition *:ease-in *:duration-300">
                        <a href="#"><img src={dollar} alt="$"/></a>
                        <a href="#"><img src={lightning} alt="/"/></a>
                        <a href="#"><img src={hashtag} alt="#"/></a>
                        <a href="#"><img src={smile} alt="=)"/></a>
                    </div>
                    <div className="mr-[44px] flex flex-row items-center">
                        <p className="font-roboto text-[22px] mr-[35px] text-white">Get the App</p>
                        <div className="flex flex-row w-[99px] h-[53px] bg-[#FFC8D0] *:flex *:items-center *:justify-center items-center justify-around *:size-12 rounded-lg">
                            <a href={appstore} className="border-r border-white" target="_blank" rel="noopener noreferrer"><img src={appstore_header} alt="" className=""/></a>
                            <a href={playstore} target="_blank" rel="noopener noreferrer"><img src={playstore_header} alt="" className=""/></a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <img src={main} alt="Make Bread"/>
                </div>
                <div className='flex flex-row justify-between flex-wrap px-[60px] absolute top-[90%] *:font-roboto *:text-10 w-full h-[72px]'>
                    <div className='flex flex-col my-auto'>
                        <p className="text-white">Join the 100,000+ people earning daily.</p>
                        <p className="text-[#FFC8D0]">Get the app and get paid.</p>
                    </div>
                    <div className="flex flex-row w-[540px] justify-between *:h-[72px] *:w-[243px] *:flex *:justify-center *:items-center *:border-2 *:border-[#262626] *:rounded-lg *:text-white hover:*:border-[#6d6d6d] *:transition *:ease-in *:duration-300">
                        <a href={appstore} target="_blank" rel="noopener noreferrer">App Store 5★</a>
                        <a href={playstore} target="_blank" rel="noopener noreferrer">Play Store 5★</a>
                    </div>
                </div>
            </main>
            <section>
                <div className="mt-[95vh] bg-white w-screen h-[50vh] flex justify-center items-center">
                    <img src={bridgegiant} alt="bridge"/>
                </div>
            </section>
            <section>
                <div className="h-[250px] w-full flex items-center relative justify-center mt-5">
                    <p className="flex flex-row items-center text-[40px] font-roboto text-white whitespace-nowrap animate-marquee">
                        Eva earned  <span className="text-[#FFC8D0] ml-[18px]">300 coins</span><img src={star} className="mx-[28px]"/>
                        Max earned  <span className="text-[#FFC8D0] ml-[18px]">115 coins</span><img src={star} className="mx-[28px]"/>
                        Lori earned  <span className="text-[#FFC8D0] ml-[18px]">289 coins</span><img src={star} className="mx-[28px]"/>
                        Nick earned  <span className="text-[#FFC8D0] ml-[18px]">77 coins</span><img src={star} className="mx-[28px]"/>
                        Irene earned  <span className="text-[#FFC8D0] ml-[18px]">1000 coins</span><img src={star} className="mx-[28px]"/>
                        Darius earned  <span className="text-[#FFC8D0] ml-[18px]">542 coins</span><img src={star} className="mx-[28px]"/>
                        Juana earned  <span className="text-[#FFC8D0] ml-[18px]">522 coins</span><img src={star} className="mx-[28px]"/>
                        Aaron earned  <span className="text-[#FFC8D0] ml-[18px]">611 coins</span><img src={star} className="mx-[28px]"/>
                        Tyne earned  <span className="text-[#FFC8D0] ml-[18px]">222 coins</span><img src={star} className="mx-[28px]"/>
                    </p>
                    <div className="flex items-center absolute w-[90vw] border-y border-[#262626] h-[215px]"></div>
                    <img src={dollargold} alt="" className="absolute left-[80%] top-[90px] z-10"/>
                </div>
                <div className="text-[164px] font-roboto flex flex-col text-center text-white leading-[150px] mt-[80px]">
                    Earn<br/>Next-Day<br/><div className="text-[#FFC8D0]">Cash Back<br/>On Any Card.</div>
                </div>
            </section>
        </div>
    )
}