import React, { useEffect, useState } from "react";
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
import cardbg from '../img/pimk-rectangle.png'
import step1 from '../img/step1-phone.png'
import step2card from '../img/step2-card.png'
import step2bank1 from '../img/step2-bank1.png'
import step2bank2 from '../img/step2-bank2.png'
import step3 from '../img/step3-phone.png'
import bridgegiantwhite from '../img/logo-giant-white.png'
import money from '../img/money-text.png'
import linkarr from '../img/link-arrow.png'
import circle from '../img/circle.png'
import filledCircle from '../img/filled-circle.png'
import checkmark from '../img/checkmark.png'
import card from '../img/flat-card-subscription.png'
import appstorebig from '../img/app-store-big.png'
import playstorebig from '../img/play-market-big.png'

const appstore = "https://apps.apple.com/us/app/skibidi-war-toilets-attack/id6449440948";
const playstore = "https://play.google.com/store/apps/details?id=com.CabinaGames.ToiletFight&hl=ru&pli=1"
export default function Home(){
    const [number, setNumber] = useState(0);
    const targetNumber = 24999920;
    const duration = 60000;

    useEffect(() => {
        const startTime = performance.now();

        const animate = (currentTime) => {
        const progress = currentTime - startTime;
        const newNumber = Math.min(
            Math.floor((progress / duration) * targetNumber),
            targetNumber
        );
        setNumber(newNumber); 
        if (newNumber < targetNumber) {
            requestAnimationFrame(animate); 
        }
        };

        requestAnimationFrame(animate); 

        return () => cancelAnimationFrame(animate); 
    }, [targetNumber, duration]);
    return(
        <div>
            <div className="absolute w-screen h-screen flex justify-center items-center animate-pulse-scale -z-10">
                    <img src={main} alt="Make Bread"/>
                </div>
            <header>
                <div className="flex flex-row h-[100px] items-center justify-between">
                    <a href="/"><img src={logo_header} alt="Bridge" className="ml-[50px]"/></a>
                    <div className="flex flex-row w-[254px] justify-between *:size-[55px] *:flex *:items-center *:justify-center *:bg-[#262626] *:rounded-lg hover:*:bg-[#535353] *:transition *:ease-in *:duration-300">
                        <a href="/"><img src={dollar} alt="$"/></a>
                        <a href="/"><img src={lightning} alt="/"/></a>
                        <a href="/"><img src={hashtag} alt="#"/></a>
                        <a href="/"><img src={smile} alt="=)"/></a>
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
                <section>
                    <div className="mt-[95vh] bg-white w-screen h-[50vh] flex justify-center items-center relative">
                        <div className="glitch">
                            <img src={bridgegiant} alt="bridge"/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="h-[250px] w-full flex items-center relative justify-center mt-5">
                        <p className="flex flex-row items-center text-[40px] font-roboto text-white whitespace-nowrap animate-marquee">
                            Eva earned  <span className="text-[#FFC8D0] ml-[18px]">300 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Max earned  <span className="text-[#FFC8D0] ml-[18px]">115 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Lori earned  <span className="text-[#FFC8D0] ml-[18px]">289 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Nick earned  <span className="text-[#FFC8D0] ml-[18px]">77 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Irene earned  <span className="text-[#FFC8D0] ml-[18px]">1000 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Darius earned  <span className="text-[#FFC8D0] ml-[18px]">542 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Juana earned  <span className="text-[#FFC8D0] ml-[18px]">522 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Aaron earned  <span className="text-[#FFC8D0] ml-[18px]">611 coins</span><img src={star} className="mx-[28px]" alt=""/>
                            Tyne earned  <span className="text-[#FFC8D0] ml-[18px]">222 coins</span><img src={star} className="mx-[28px]" alt=""/>
                        </p>
                        <div className="flex items-center absolute w-[90vw] border-y border-[#262626] h-[215px]"></div>
                        <img src={dollargold} alt="" className="absolute left-[80%] top-[90px] z-10"/>
                        <img src={dollargold} alt="" className="absolute left-[20%] top-[800px] -z-10"/>
                    </div>
                    <div className="text-[164px] font-roboto flex flex-col text-center text-white leading-[150px] mt-[80px]">
                        Earn<br/>Next-Day<br/><div className="text-[#FFC8D0]">Cash Back<br/>On Any Card.</div>
                    </div>
                    <div className="text-[22px] font-roboto flex flex-col text-center text-white mt-[305px]">
                    No receipts needed. No waiting around.<br/>No limits on how much you can earn.
                    </div>
                </section>
                <section>
                    <div className="font-roboto text-white text-center">
                        <div className="text-[146px] leading-[146px] my-[200px]">Here's How<br/>It Works</div>                
                        <div className="w-screen px-[44px] ">
                            <div className="flex flex-row ">
                                <div className="w-[60vw] flex flex-col justify-center">
                                    <h1 className="text-[16px] w-[140px] h-[55px] bg-[#262626] rounded-3xl flex justify-center items-center mx-auto">Step 01</h1>
                                    <h1 className="text-[82px] leading-[82px] mt-[23px]">Download<br/>The App</h1>
                                    <p className="text-[16px] leading-[24px] mt-[60px]">We work with our partners to<br/>help you make money.</p>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={cardbg} alt="" className=""/>
                                    <img src={step1} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="flex flex-row my-[55px]">
                                <div className="w-[60vw] flex flex-col justify-center">
                                    <h1 className="text-[16px] w-[140px] h-[55px] bg-[#262626] rounded-3xl flex justify-center items-center mx-auto">Step 02</h1>
                                    <h1 className="text-[82px] leading-[82px] mt-[23px]">Start Making<br/>Money</h1>
                                    <p className="text-[16px] leading-[24px] mt-[60px]">Link your existing debit card or bank with<br/>Bridge and earn on every purchase.</p>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={cardbg} alt="" className=""/>
                                    <img src={step2card} alt="" className="absolute"/>
                                    <img src={step2bank1} alt="" className="top-0 left-0 -ml-[100px] -mt-[50px] absolute"/>
                                    <img src={step2bank2} alt="" className="bottom-0 right-0 absolute -mr-[25px] -mb-[20px]"/>
                                </div>
                            </div>
                            <div className="flex flex-row ">
                                <div className="w-[60vw] flex flex-col justify-center">
                                    <h1 className="text-[16px] w-[140px] h-[55px] bg-[#262626] rounded-3xl flex justify-center items-center mx-auto">Step 03</h1>
                                    <h1 className="text-[82px] leading-[82px] mt-[23px]">Cash Out<br/>Instantly</h1>
                                    <p className="text-[16px] leading-[24px] mt-[60px]">Deposit your earnings right<br/>into your bank account.</p>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={cardbg} alt="" className=""/>
                                    <img src={step3} alt="" className="absolute"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mt-[260px] mb-[200px] flex justify-center items-center glitch">
                        <img src={bridgegiantwhite} alt=""/>
                    </div>
                    <div className="font-roboto text-center flex flex-col justify-center text-white">
                        <h1 className="text-[146px] leading-[146px]">Start Making</h1>
                        <img src={money} alt="" className="w-[648px] h-[364px] mx-auto -mt-[75px]"/>
                        <p className="text-[22px] leading-[30px]">Link your existing bank card or get a<br/>Bridge card. Earn either way.</p>
                    </div>
                    <div className="px-[130px] w-screen font-roboto flex flex-row justify-evenly mt-[250px]">
                        <div className="w-[30vw] h-[1100px] border-2 border-[#262626] rounded-3xl text-white">
                            <div className="border-b-2 border-[#262626] flex flex-col justify-center items-center">
                                <h1 className="text-white text-[82px] mt-[123px]">Earn</h1>
                                <p className="text-[16px] mt-[23px]">(Link your existing cards)</p>
                                <p className="text-[31px] mt-[35px] mb-[20px]">Free</p>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on Every Card Purchase</p>
                                <p className="text-[16px] text-black w-[144px] h-[55px] bg-[#FFC8D0] rounded-3xl flex justify-center items-center">2 Coins</p>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn with Surveys</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on Every Referal</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Chances to Double your Deposit</p>
                                <img src={circle} alt="" className=""/>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on ATM Withdrawals</p>
                                <img src={circle} alt="" className=""/>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#262626] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Cash Out as Soon as you Earn</p>
                                <p className="text-[16px] text-black w-[144px] h-[55px] bg-[#FFC8D0] rounded-3xl flex justify-center items-center">400 Coins</p>
                            </div>
                            <div className="flex justify-center items-center text-black">
                                <a href="/" target="_blank" rel="noreferrer" className="bg-[#FFC8D0] hover:bg-[#ffb7c2] transition duration-300 ease-in-out flex justify-center items-center w-[453px] h-[73px] rounded-3xl mt-[14px]">Select Earn Plan<img src={linkarr} alt="" className="ml-[8px]"/></a>
                            </div>
                        </div>
                        <div className="w-[30vw] h-[1100px] border-2 border-[#F3F3F3] rounded-3xl text-black bg-white relative">
                            <img src={card} alt="" className="absolute -top-[180px] left-[50%] transform -translate-x-1/2"/>
                            <div className="border-b-2 border-[#F3F3F3] flex flex-col justify-center items-center">
                                <h1 className="text-black text-[82px] mt-[123px]">Money</h1>
                                <p className="text-[16px] mt-[23px]">(Get a Bridge card)</p>
                                <p className="text-[31px] mt-[35px] mb-[20px]">$4/mo</p>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on Every Card Purchase</p>
                                <p className="text-[16px] text-black w-[144px] h-[55px] bg-[#FFC8D0] rounded-3xl flex justify-center items-center">8 Coins</p>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn with Surveys</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on Every Referal</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Chances to Double your Deposit</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Earn on ATM Withdrawals</p>
                                <div className="flex justify-center items-center relative">
                                    <img src={filledCircle} alt="" className=""/>
                                    <img src={checkmark} alt="" className="absolute"/>
                                </div>
                            </div>
                            <div className="px-[24px] border-b-2 border-[#F3F3F3] flex items-center justify-between h-[100px]">
                                <p className="text-[16px]">Cash Out as Soon as you Earn</p>
                                <p className="text-[16px] text-black w-[144px] h-[55px] bg-[#FFC8D0] rounded-3xl flex justify-center items-center">200 Coins</p>
                            </div>
                            <div className="flex justify-center items-center text-black">
                                <a href="/" target="_blank" rel="noreferrer" className="bg-[#FFC8D0] hover:bg-[#ffb7c2] transition duration-300 ease-in-out flex justify-center items-center w-[453px] h-[73px] rounded-3xl mt-[14px]">Select Money Plan<img src={linkarr} alt="" className="ml-[8px]"/></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="font-roboto text-center mt-[330px] text-white w-full px-[500px]">
                        <p className="text-[22px]">Members Have Already Earned Over</p>
                        <h1 className="text-[146px] mt-[40px] text-right">{number.toLocaleString()}</h1>
                        <h1 className="text-[44px] mt-[12px] text-right mb-[223px]">Coins</h1>
                    </div>
                </section>
                <section>
                    <div className="w-screen h-screen bg-white pt-[60px]">
                        <div className="text-black font-roboto text-center">
                            <h1 className="text-[164px] leading-[164px] ">Get Bridge.<br/>Get Paid.</h1>
                            <p className="text-[22px] mt-[115px]">Download the app to start earning.</p>
                        </div>
                        <div className="mt-[80px] flex flex-row justify-evenly *:w-[40vw] *:h-[270px] *:flex *:justify-center *:items-center *:border-2 *:border-[#262626] *:hover:border-[#464646] *:rounded-3xl *:transition *:duration-300 *:ease-in-out">
                            <a href={appstore} target="_blank" rel="noreferrer"><img src={appstorebig} alt=""/></a>
                            <a href={appstore} target="_blank" rel="noreferrer"><img src={playstorebig} alt=""/></a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="font-roboto pt-[60px]">
                        <div className="h-[220px] border-y-2 border-[#262626] flex flex-row">
                            <div className=" w-[50vw] flex justify-center items-center border-r-2 border-[#262626] h-[100%]">
                                <p className="text-[18px] text-[#262626] leading-[22px] m-auto border-red">Bridge is a financial technology company and is not a bank. Banking services provided by<br/>Blue Ridge Bank N.A., Member FDIC. The Bridge Money Visa® Debit Card is issued by Blue<br/>Ridge Bank N.A. pursuant to a license from Visa U.S.A. Inc. and may be used everywhere<br/>Visa debit cards are accepted. Apple, the Apple logo, and iPhone are trademarks of Apple<br/>Inc. App Store is a service mark of Apple Inc. Google, Android and Google Play are<br/>trademarks of Google Inc.</p>
                            </div>
                            <div className="text-[25px] text-white *:flex *:flex-row w-[50vw] h-[100%]">
                                <div className="border-b-2 border-[#262626] w-[100%] *:w-[50%] h-[50%] *:h-[100%] *:flex *:justify-center *:items-center">
                                    <a href="/" className="border-r-2 border-[#262626]">TikTok</a>
                                    <a href="/">Instagram</a>
                                </div>
                                <div className="w-[100%] *:w-[50%] h-[50%] *:h-[100%] *:flex *:justify-center *:items-center">
                                    <a href="/" className="border-r-2 border-[#262626]">Twitter</a>
                                    <a href="/">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[90px] flex justify-center items-center mb-[40px] glitch">
                        <img src={bridgegiantwhite} alt=""/>
                    </div>
                </section>
            </main>
            <footer>
                <div className="flex flex-row justify-center w-screen h-[180px] border-t-2 border-[#262626] font-roboto text-[15px] pt-[48px] pb-[80px] text-[#262626]">
                    <p>© 2024 Bridge Money Inc. prod. by only1stumpy</p>
                    <div className="flex flex-row w-[50vw] justify-between ml-[80px]">
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Sitemap</a>
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Cardholder Agreement</a>
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Deposit Agreement</a>
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Electromic Disclosure</a>
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
                        <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-300 ease-in-out">Terms of Use</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}