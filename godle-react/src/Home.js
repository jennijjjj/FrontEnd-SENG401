import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Slider from './Slider';


const Home = (props) => {
    const [termsChecked, setTermsChecked] = useState(false);

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const handleTermsClick = () => {
        // Open the Google Docs link in a popup window
        window.open(
            "https://docs.google.com/document/d/1qPbP5rT9Azi8CMUa8ZeLvxgr_Nw907LhM239D2zolsE/edit?usp=sharing",
            "_blank",
            "width=600,height=600"
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (termsChecked) {
            console.log("Form submitted!");
            // Add your form submission logic here
        } else {
            alert("Please accept the terms and services before submitting.");
        }
    };
    return (<>
        <div className="terms-container">
            <h1>Terms of Use Agreement</h1>

            <strong>1. Acceptance of Terms of Use Agreement.</strong>
            <p>By creating a Godle account, whether through a mobile device, mobile application or computer (collectively, the “Service”) you agree to be bound by (i) these Terms of Use, (ii) our Privacy Policy and Cookie Policy, each of which is incorporated by reference into this Agreement, and (iii) any terms disclosed and agreed to by you if you purchase additional features, products or services we offer on the Service (collectively, this "Agreement"). If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use the Service.</p>
            <p>We may make changes to this Agreement and to the Service from time to time. We may do this for a variety of reasons including to reflect changes in or requirements of the law, new features, or changes in business practices. If the changes include material changes to your rights or obligations, we will notify you at least 30 days in advance of the changes (unless we’re unable to do so under applicable law) by reasonable means, which could include notification through the Service or via email. If you continue to use the Service after the changes become effective, then you agree to the revised Agreement.</p>

            <strong>2. Eligibility.</strong>
            <p>You are not authorized to create an account or access or use the Service or systems it resides on unless all of the following are true:</p>
            <ul>
                <li>You are at least 18 years of age.</li>
                <li>You can form a binding contract with Godle,</li>
                <li>You are not a person who is barred from using the Service under the laws of Canada or any other applicable jurisdiction,</li>
                <li>You will comply with this Agreement and all applicable local, provincial, national and international laws, rules and regulations.</li>
            </ul>

            <strong>3. Your Account.</strong>
            <p>You are responsible for maintaining the confidentiality of your login credentials you use to sign up for Godle, and you are solely responsible for all activities that occur under those credentials. If you think someone has gained access to your account, please immediately contact us.</p>

            <strong>4. Modifying the Service and Termination.</strong>
            <p>Godle is always striving to improve the Service and bring you additional functionality that you will find engaging and useful. This means we may add new product features or enhancements from time to time as well as remove some features, and if these actions do not materially affect your rights or obligations, we may not provide you with notice before taking them. We may even suspend the Service entirely, in which event we will notify you in advance unless extenuating circumstances, such as safety or security concerns, prevent us from doing so.</p>
            <p>The easiest way to terminate your account is to reach out to our support team. Godle may terminate your account at any time without notice if it believes that you have violated this Agreement. Upon such termination, you will not be entitled to any refund for purchases.</p>
            <p>After your account is terminated, this Agreement will terminate, except that the following provisions will still apply to you and Godle:: Section 4, Section 5, and Sections 12 through 19.</p>

            <strong>5. Safety; Your Interactions with Other Members.</strong>
            <p>Though Godle strives to encourage a respectful member experience. Godle is not responsible for the conduct of any member on or off of the Service. You agree to use caution in all interactions with other members, particularly if you decide to communicate off the Service or meet in person. You agree that you will not provide your financial information (for example, your credit card or bank account information), or wire or otherwise send money to other members.</p>
            <p>YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. YOU UNDERSTAND THAT GODLE DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS MEMBERS. GODLE MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OR COMPATIBILITY OF MEMBERS.</p>

            <strong>6. Rights Godle Grant You.</strong>
            <p>Godle grants you a personal, worldwide, royalty-free, non-assignable, nonexclusive, revocable, and non-sublicensable license to access and use the Service. This license is for the sole purpose of letting you use and enjoy the Service’s benefits as intended by Godle and permitted by this Agreement. This license and any authorization to access the Service are automatically revoked in the event that you do any of the following:</p>
            <ul>
                <li>Use the Service or any content contained in the Service for any commercial purposes without our written consent.</li>
                <li>Copy, modify, transmit, create any derivative works from, make use of, or reproduce in any way any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through the Service without Godle’s prior written consent.</li>
                <li>Express or imply that any statements you make are endorsed by Godle.</li>
                <li>Use any robot, bot, spider, crawler, scraper, site search/retrieval application, proxy or other manual or automatic device, method or process to access, retrieve, index, "data mine", or in any way reproduce or circumvent the navigational structure or presentation of the Service or its contents.</li>
                <li>Use the Service in any way that could interfere with, disrupt or negatively affect the Service or the servers or networks connected to the Service.</li>
                <li>Upload viruses or other malicious code or otherwise compromise the security of the Service.</li>
                <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted to or through the Service.</li>
                <li>"Frame" or "mirror" any part of the Service without Godle’s prior written authorization.</li>
                <li>Use meta tags or code or other devices containing any reference to Godle or the Service (or any trademark, trade name, service mark, logo or slogan of Godle) to direct any person to any other website for any purpose.</li>
                <li>Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Service, or cause others to do so.</li>
                <li>Use or develop any third-party applications that interact with the Service or other members' Content or information without our written consent.</li>
                <li>Use, access, or publish the Godle application programming interface without our written consent.</li>
                <li>Probe, scan or test the vulnerability of our Service or any system or network.</li>
                <li>Encourage or promote any activity that violates this Agreement.</li>
            </ul>
            <p>Godle may investigate and take any available legal action in response to illegal or unauthorized uses of the Service, including termination of your account.</p>

            <strong>7. Rights you Grant Godle.</strong>
            <p>By creating an account, you grant to Godle a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify and distribute information you authorize us to access from third parties such as Facebook, as well as any information you post, upload, display or otherwise make available (collectively, "post") on the Service or transmit to other members (collectively, "Content"). Godle’s license to your Content shall be non-exclusive, except that Godle’s license shall be exclusive with respect to derivative works created through use of the Service. For example, Godle would have an exclusive license to screenshots of the Service that include your Content. In addition, so that Godle can prevent the use of your Content outside of the Service, you authorize Godle to act on your behalf with respect to infringing uses of your Content taken from the Service by other members or third parties. This expressly includes the authority, but not the obligation, to send notices pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices) on your behalf if your Content is taken and used by third parties outside of the Service. Our license to your Content is subject to your rights under applicable law (for example laws regarding personal data protection to the extent any Content contains personal information as defined by those laws) and is for the limited purpose of operating, developing, providing, and improving the Service and researching and developing new ones. You agree that any Content you place or that you authorize us to place on the Service may be viewed by other members and may be viewed by any person visiting or participating in the Service (such as individuals who may receive shared Content from other Godle members).</p>
            <p>You agree that all information that you submit upon creation of your account, including information submitted from your Facebook account, is accurate and truthful and you have the right to post the Content on the Service and grant the license to Godle above.</p>
            <p>You understand and agree that we may monitor or review any Content you post as part of a Service. We may delete any Content, in whole or in part, that in our sole judgment violates this Agreement or may harm the reputation of the Service.</p>
            <p>When communicating with our customer care representatives, you agree to be respectful and kind. If we feel that your behavior towards any of our customer care representatives or other employees is at any time threatening, harassing, or offensive, we reserve the right to immediately terminate your account.</p>
            <p>In consideration for Godle allowing you to use the Service, you agree that we, our affiliates, and our third-party partners may place advertising on the Service. By submitting suggestions or feedback to Godle regarding our Service, you agree that Godle may use and share such feedback for any purpose without compensating you.</p>
            <p>Please be informed that Godle may access, store and disclose your account information and Content if required to do so by law, by performing its agreement with you, or in a good faith belief that such access, storage or disclosure satisfies a legitimate interest, including to: (i) comply with legal process; (ii) enforce the Agreement; (iii) respond to claims that any Content violates the rights of third parties; (iv) respond to your requests for customer service; or (v) protect the rights, property or personal safety of the Company or any other person.</p>

            <strong>8. Community Rules.</strong>
            <p>By using the Service, you agree that you will not:</p>
            <ul>
                <li>Use the Service for any purpose that is illegal or prohibited by this Agreement.</li>
                <li>Use the Service for any harmful or nefarious purpose.</li>
                <li>Use the Service in order to damage Godle.</li>
                <li>Spam, solicit money from, or defraud any members.</li>
                <li>Impersonate any person or entity or post any images of another person without his or her permission.</li>
                <li>Bully, "stalk", intimidate, assault, harass, mistreat or defame any person.</li>
                <li>Post any Content that violates or infringes anyone's rights, including rights of publicity, privacy, copyright, trademark, or other intellectual property or contract right.</li>
                <li>Post any Content that is hate speech, threatening, sexually explicit, or pornographic.</li>
                <li>Post any Content that incites violence; or contains nudity or graphic or gratuitous violence.</li>
                <li>Post any Content that promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual.</li>
                <li>Solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other members or disseminate another person's personal information without his or her permission.</li>
                <li>Use another member's account, share an account with another member, or maintain more than one account.</li>
                <li>Create another account if we have already terminated your account, unless you have our permission.</li>
            </ul>
            <p>Godle reserves the right to investigate and/or terminate your account without a refund of any purchases if you have violated this Agreement, misused the Service or behaved in a way that Godle regards as inappropriate or unlawful, including actions or communications that occur on or off the Service. In the event that you violate these rules or our Community Guidelines, your authorization to use the Service will be automatically revoked.</p>

            <strong>9. Other Members' Content.</strong>
            <p>Although Godle reserves the right to review and remove Content that violates this Agreement, such Content is the sole responsibility of the member who posts it, and Godle cannot guarantee that all Content will comply with this Agreement. If you see Content on the Service that violates this Agreement, please report it within the Service or via our contact form.</p>

            <strong>10. Notice and Procedure for Making Claims of Copyright Infringement.</strong>
            <p>If you believe that your work has been copied and posted on the Service in a way that constitutes copyright infringement, please submit a takedown request using the form here.</p>
            <p>If you contact us regarding alleged copyright infringement, please be sure to include the following information:</p>
            <ul>
                <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
                <li>A description of the copyrighted work that you claim has been infringed.</li>
                <li>A description of where the material that you claim is infringing is located on the Service (and such description must be reasonably sufficient to enable us to find the alleged infringing material).</li>
                <li>Your contact information, including address, telephone number, and email address, and the copyright owner’s identity.</li>
                <li>A written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ul>
            <p>Godle will terminate the accounts of repeat infringers.</p>

            <strong>TO BE CONTINUED</strong>
            <p></p>


            <label>
                <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={handleTermsChange}
                    style={{ marginRight: "10px" }}
                />
                I accept the{" "}
                <span
                    onClick={handleTermsClick}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Terms and Services
                </span>
            </label>
        </div>
        <div className={"titleContainer"}>
            <div>Godle</div>
        </div>
        <form onSubmit={handleSubmit} className="slider-form">
            <div>
                <Slider title="Zealousness" />
                <Slider title="Mysticism" />
                <Slider title="Squeamishness" />
                <Slider title="Technology" />
                <Slider title="Erudition" />
                <Slider title="Organization " />
                <Slider title="Morality" />
                <Slider title="Zen" />
                <Slider title="Aggression" />
                <Slider title="Grandeur" />
                <Slider title="Temperament" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </>
    )

}

export default Home