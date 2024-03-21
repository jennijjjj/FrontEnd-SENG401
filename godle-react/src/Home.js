import React, { useState } from "react";
import Slider from './Slider';
import { useNavigate } from "react-router-dom";


const Home = ({ tosButtonClicked, settosButtonClicked, setMatchedDeities, user }) => {
    const [sliderValues, setSliderValues] = useState({
        Zealousness: 0,
        Mysticism: 0,
        Squeamishness: 0,
        Technology: 0,
        Erudition: 0,
        Organization: 0,
        Morality: 0,
        Zen: 0,
        Aggression: 0,
        Grandeur: 0,
        Temperament: 0,
        User: null,
    });

    const [termsChecked, setTermsChecked] = useState(false);
    const navigate = useNavigate();

    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const handleTermsClick = () => {
        settosButtonClicked(true);
    };

    const handleSliderChange = (title, value) => {
        setSliderValues((prevValues) => ({
            ...prevValues,
            [title]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tosButtonClicked) {
            console.log("Form submitted!");
            console.log("Attribute List:", sliderValues);
            
            if (user) {
                sliderValues.User = user.username
            }

            try {
                fetch('/SubmitAttributes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sliderValues)
                })
                    .then(response => {
                        if (response.ok) {
                            response.json()
                                .then(data => {
                                    setMatchedDeities(data);
                                    navigate("/Matches");
                                }) 
                        } else if (response.status === 400) {
                            alert('Error', response.statusText);
                            console.error(response.statusText);
                        } else {
                            alert('Submission failed:', response.statusText);
                            console.error('Submission failed:', response.statusText);
                        }
                    })
            } catch (error) {
                alert("Error with submission. Please try again.");
                console.error('Submission failed:', error);
            }
        } else {
            alert("Please accept the terms and services before submitting.");
        }
    };

    return (<>
        {tosButtonClicked ? (null) : (
            <div className="terms-container">
                <div className="terms-of-service">
                    <h1>Terms of Use Agreement</h1>

                    <strong>1. Acceptance of Terms of Use Agreement.</strong>
                    <p>By creating a Divinity account, whether through a mobile device, mobile application or computer (collectively, the “Service”) you agree to be bound by (i) these Terms of Use, (ii) our Privacy Policy and Cookie Policy, each of which is incorporated by reference into this Agreement, and (iii) any terms disclosed and agreed to by you if you purchase additional features, products or services we offer on the Service (collectively, this "Agreement"). If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use the Service.</p>
                    <p>We may make changes to this Agreement and to the Service from time to time. We may do this for a variety of reasons including to reflect changes in or requirements of the law, new features, or changes in business practices. If the changes include material changes to your rights or obligations, we will notify you at least 30 days in advance of the changes (unless we’re unable to do so under applicable law) by reasonable means, which could include notification through the Service or via email. If you continue to use the Service after the changes become effective, then you agree to the revised Agreement.</p>

                    <strong>2. Eligibility.</strong>
                    <p>You are not authorized to create an account or access or use the Service or systems it resides on unless all of the following are true:</p>
                    <ul>
                        <li>You are at least 18 years of age.</li>
                        <li>You can form a binding contract with Divinity,</li>
                        <li>You are not a person who is barred from using the Service under the laws of Canada or any other applicable jurisdiction,</li>
                        <li>You will comply with this Agreement and all applicable local, provincial, national and international laws, rules and regulations.</li>
                    </ul>

                    <strong>3. Your Account.</strong>
                    <p>You are responsible for maintaining the confidentiality of your login credentials you use to sign up for Divinity, and you are solely responsible for all activities that occur under those credentials. If you think someone has gained access to your account, please immediately contact us.</p>

                    <strong>4. Modifying the Service and Termination.</strong>
                    <p>Divinity is always striving to improve the Service and bring you additional functionality that you will find engaging and useful. This means we may add new product features or enhancements from time to time as well as remove some features, and if these actions do not materially affect your rights or obligations, we may not provide you with notice before taking them. We may even suspend the Service entirely, in which event we will notify you in advance unless extenuating circumstances, such as safety or security concerns, prevent us from doing so.</p>
                    <p>The easiest way to terminate your account is to reach out to our support team. Divinity may terminate your account at any time without notice if it believes that you have violated this Agreement. Upon such termination, you will not be entitled to any refund for purchases.</p>
                    <p>After your account is terminated, this Agreement will terminate, except that the following provisions will still apply to you and Divinity:: Section 4, Section 5, and Sections 12 through 19.</p>

                    <strong>5. Safety; Your Interactions with Other Members.</strong>
                    <p>Though Divinity strives to encourage a respectful member experience. Divinity is not responsible for the conduct of any member on or off of the Service. You agree to use caution in all interactions with other members, particularly if you decide to communicate off the Service or meet in person. You agree that you will not provide your financial information (for example, your credit card or bank account information), or wire or otherwise send money to other members.</p>
                    <p>YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. YOU UNDERSTAND THAT Divinity DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS OR OTHERWISE INQUIRE INTO THE BACKGROUND OF ITS MEMBERS. Divinity MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE CONDUCT OR COMPATIBILITY OF MEMBERS.</p>

                    <strong>6. Rights Divinity Grant You.</strong>
                    <p>Divinity grants you a personal, worldwide, royalty-free, non-assignable, nonexclusive, revocable, and non-sublicensable license to access and use the Service. This license is for the sole purpose of letting you use and enjoy the Service’s benefits as intended by Divinity and permitted by this Agreement. This license and any authorization to access the Service are automatically revoked in the event that you do any of the following:</p>
                    <ul>
                        <li>Use the Service or any content contained in the Service for any commercial purposes without our written consent.</li>
                        <li>Copy, modify, transmit, create any derivative works from, make use of, or reproduce in any way any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through the Service without Divinity’s prior written consent.</li>
                        <li>Express or imply that any statements you make are endorsed by Divinity.</li>
                        <li>Use any robot, bot, spider, crawler, scraper, site search/retrieval application, proxy or other manual or automatic device, method or process to access, retrieve, index, "data mine", or in any way reproduce or circumvent the navigational structure or presentation of the Service or its contents.</li>
                        <li>Use the Service in any way that could interfere with, disrupt or negatively affect the Service or the servers or networks connected to the Service.</li>
                        <li>Upload viruses or other malicious code or otherwise compromise the security of the Service.</li>
                        <li>Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted to or through the Service.</li>
                        <li>"Frame" or "mirror" any part of the Service without Divinity’s prior written authorization.</li>
                        <li>Use meta tags or code or other devices containing any reference to Divinity or the Service (or any trademark, trade name, service mark, logo or slogan of Divinity) to direct any person to any other website for any purpose.</li>
                        <li>Modify, adapt, sublicense, translate, sell, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Service, or cause others to do so.</li>
                        <li>Use or develop any third-party applications that interact with the Service or other members' Content or information without our written consent.</li>
                        <li>Use, access, or publish the Divinity application programming interface without our written consent.</li>
                        <li>Probe, scan or test the vulnerability of our Service or any system or network.</li>
                        <li>Encourage or promote any activity that violates this Agreement.</li>
                    </ul>
                    <p>Divinity may investigate and take any available legal action in response to illegal or unauthorized uses of the Service, including termination of your account.</p>

                    <strong>7. Rights you Grant Divinity.</strong>
                    <p>By creating an account, you grant to Divinity a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify and distribute information you authorize us to access from third parties such as Facebook, as well as any information you post, upload, display or otherwise make available (collectively, "post") on the Service or transmit to other members (collectively, "Content"). Divinity’s license to your Content shall be non-exclusive, except that Divinity’s license shall be exclusive with respect to derivative works created through use of the Service. For example, Divinity would have an exclusive license to screenshots of the Service that include your Content. In addition, so that Divinity can prevent the use of your Content outside of the Service, you authorize Divinity to act on your behalf with respect to infringing uses of your Content taken from the Service by other members or third parties. This expressly includes the authority, but not the obligation, to send notices pursuant to 17 U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices) on your behalf if your Content is taken and used by third parties outside of the Service. Our license to your Content is subject to your rights under applicable law (for example laws regarding personal data protection to the extent any Content contains personal information as defined by those laws) and is for the limited purpose of operating, developing, providing, and improving the Service and researching and developing new ones. You agree that any Content you place or that you authorize us to place on the Service may be viewed by other members and may be viewed by any person visiting or participating in the Service (such as individuals who may receive shared Content from other Divinity members).</p>
                    <p>You agree that all information that you submit upon creation of your account, including information submitted from your Facebook account, is accurate and truthful and you have the right to post the Content on the Service and grant the license to Divinity above.</p>
                    <p>You understand and agree that we may monitor or review any Content you post as part of a Service. We may delete any Content, in whole or in part, that in our sole judgment violates this Agreement or may harm the reputation of the Service.</p>
                    <p>When communicating with our customer care representatives, you agree to be respectful and kind. If we feel that your behavior towards any of our customer care representatives or other employees is at any time threatening, harassing, or offensive, we reserve the right to immediately terminate your account.</p>
                    <p>In consideration for Divinity allowing you to use the Service, you agree that we, our affiliates, and our third-party partners may place advertising on the Service. By submitting suggestions or feedback to Divinity regarding our Service, you agree that Divinity may use and share such feedback for any purpose without compensating you.</p>
                    <p>Please be informed that Divinity may access, store and disclose your account information and Content if required to do so by law, by performing its agreement with you, or in a good faith belief that such access, storage or disclosure satisfies a legitimate interest, including to: (i) comply with legal process; (ii) enforce the Agreement; (iii) respond to claims that any Content violates the rights of third parties; (iv) respond to your requests for customer service; or (v) protect the rights, property or personal safety of the Company or any other person.</p>

                    <strong>8. Community Rules.</strong>
                    <p>By using the Service, you agree that you will not:</p>
                    <ul>
                        <li>Use the Service for any purpose that is illegal or prohibited by this Agreement.</li>
                        <li>Use the Service for any harmful or nefarious purpose.</li>
                        <li>Use the Service in order to damage Divinity.</li>
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
                    <p>Divinity reserves the right to investigate and/or terminate your account without a refund of any purchases if you have violated this Agreement, misused the Service or behaved in a way that Divinity regards as inappropriate or unlawful, including actions or communications that occur on or off the Service. In the event that you violate these rules or our Community Guidelines, your authorization to use the Service will be automatically revoked.</p>

                    <strong>9. Other Members' Content.</strong>
                    <p>Although Divinity reserves the right to review and remove Content that violates this Agreement, such Content is the sole responsibility of the member who posts it, and Divinity cannot guarantee that all Content will comply with this Agreement. If you see Content on the Service that violates this Agreement, please report it within the Service or via our contact form.</p>

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
                    <p>Divinity will terminate the accounts of repeat infringers.</p>

                    <strong>11. Disclaimers.</strong>
                    <p>Divinity PROVIDES THE SERVICE ON AN “AS IS” AND “AS AVAILABLE” BASIS AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SERVICE (INCLUDING ALL CONTENT CONTAINED THEREIN), INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. Divinity DOES NOT REPRESENT OR WARRANT THAT (A) THE SERVICE WILL BE UNINTERRUPTED, SECURE OR ERROR FREE, (B) ANY DEFECTS OR ERRORS IN THE SERVICE WILL BE CORRECTED, OR (C) THAT ANY CONTENT OR INFORMATION YOU OBTAIN ON OR THROUGH THE SERVICE WILL BE ACCURATE.</p>
                    <p>Divinity TAKES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR ANOTHER MEMBER OR THIRD PARTY POSTS, SENDS OR RECEIVES THROUGH THE SERVICE. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK.</p>

                    <strong>12. Third Party Services.</strong>
                    <p>The Service may contain advertisements and promotions offered by third parties and links to other web sites or resources. Divinity is not responsible for the availability (or lack of availability) of such external websites or resources. If you choose to interact with the third parties made available through our Service, such party's terms will govern their relationship with you. Divinity is not responsible or liable for such third parties' terms or actions.</p>

                    <strong>13. Limitation of Liability.</strong>
                    <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL Divinity, ITS AFFILIATES, EMPLOYEES, LICENSORS OR SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, PUNITIVE, OR ENHANCED DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE, (II) THE CONDUCT OR CONTENT OF OTHER MEMBERS OR THIRD PARTIES ON, THROUGH, OR FOLLOWING USE OF THE SERVICE; OR (III) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR CONTENT, EVEN IF Divinity HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT WILL Divinity’S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICE EXCEED THE GREATER OF THE AMOUNT PAID, IF ANY, BY YOU TO Divinity FOR THE SERVICE AND USD100 WHILE YOU HAVE AN ACCOUNT.</p>
                    <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION MAY NOT APPLY TO YOU.</p>

                    <strong>14. Arbitration, Class-Action Waiver, and Jury Waiver.</strong>
                    <p>Except for members residing within the EU or European Economic Area and elsewhere where prohibited by applicable law:</p>
                    <ol>
                        <li>The exclusive means of resolving any dispute or claim arising out of or relating to this Agreement (including any alleged breach thereof) or the Service shall be BINDING ARBITRATION administered by JAMS under the JAMS Streamlined Arbitration Rules & Procedures, except as modified by our Arbitration Procedures. The one exception to the exclusivity of arbitration is that either party has the right to bring an individual claim against the other in a small claims court of competent jurisdiction, or, if filed in arbitration, the responding party may request that the dispute proceed in small claims court instead if the claim is within the jurisdiction of the small claims court. If the request to proceed in small claims court is made before an arbitrator has been appointed, the arbitration shall be administratively closed. If the request to proceed in small claims court is made after an arbitrator has been appointed, the arbitrator shall determine whether the dispute should remain in arbitration or instead be decided in small claims court. Such arbitration shall be conducted by written submissions only, unless either you or Divinity elect to invoke the right to an oral hearing before the Arbitrator. But whether you choose arbitration or small claims court, you agree that you will not under any circumstances commence, or maintain, or participate in against the Company any class action, class arbitration, or other representative action or proceeding against Divinity.</li>
                        <li>By using the Service in any manner, you agree to the above arbitration agreement. In doing so, YOU GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend any claims between you and the Company (except for matters that may be taken to small-claims court). YOU ALSO GIVE UP YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR OTHER CLASS PROCEEDING. If you assert a claim against Divinity outside of small claims court (and Divinity does not request that the claim be moved to small claims court), your rights will be determined by a NEUTRAL ARBITRATOR, NOT A JUDGE OR JURY, and the arbitrator shall determine all claims and all issues regarding the arbitrability of the dispute. You are entitled to a fair hearing before the arbitrator. The arbitrator can generally grant any relief that a court can, including the ability to hear a dispositive motion (which may include a dispositive motion based upon the parties’ pleadings, as well as a dispositive motion based upon the parties’ pleadings along with the evidence submitted), but you should note that arbitration proceedings are usually simpler and more streamlined than trials and other judicial proceedings. Decisions by the arbitrator are enforceable in court and may be overturned by a court only for very limited reasons. For details on the arbitration process, see our Arbitration Procedures.</li>
                        <li>Any proceeding to enforce this arbitration agreement, including any proceeding to confirm, modify, or vacate an arbitration award, may be commenced in any court of competent jurisdiction. In the event that this arbitration agreement is for any reason held to be unenforceable, any litigation against the Company (except for small-claims court actions) may be commenced only in the federal or state courts located in Dallas County, Texas. You hereby irrevocably consent to the jurisdiction of those courts for such purposes.</li>
                        <li>The online dispute settlement platform of the European Commission is available under http://ec.europa.eu/odr. Divinity does not take part in dispute settlement procedures in front of a consumer arbitration entity for members residing in the EU or European Economic Area.</li>
                    </ol>

                    <strong>15. Governing Law.</strong>
                    <p>For members residing in the EU or European Economic Area or elsewhere where our arbitration agreement is prohibited by law, the laws of Texas, U.S.A., excluding Texas’s conflict of laws rules, will apply to any disputes arising out of or relating to this Agreement or the Service. Notwithstanding the foregoing, the Arbitration Agreement in Section 15 above shall be governed by the Federal Arbitration Act. For the avoidance of doubt, the choice of Texas governing law shall not supersede any mandatory consumer protection legislation in such jurisdictions.</p>

                    <strong>16. Venue.</strong>
                    <p>Except for members residing in the EU or European Economic Area who may bring claims in their country of residence in accordance with applicable law and except for claims that may be properly brought in a small claims court of competent jurisdiction, all claims arising out of or relating to this Agreement, to the Service, or to your relationship with Divinity that for whatever reason are not submitted to arbitration will be litigated exclusively in the federal or state courts of Dallas County, Texas, U.S.A. You and Divinity consent to the exercise of personal jurisdiction of courts in the State of Texas and waive any claim that such courts constitute an inconvenient forum.</p>

                    <strong>17. Indemnity by You.</strong>
                    <p>You agree, to the extent permitted under applicable law, to indemnify, defend and hold harmless Divinity, our affiliates, and their and our respective officers, directors, agents, and employees from and against any and all complaints, demands, claims, damages, losses, costs, liabilities and expenses, including attorney’s fees due to, arising out of, or relating in any way to your access to or use of the Service, your Content, or your breach of this Agreement.</p>

                    <strong>18. Entire Agreement; Other.</strong>
                    <p>This Agreement, which includes the Privacy Policy, Cookie Policy, the Safety Tips, Community Guidelines and the Arbitration Procedures (if applicable to you), and any terms disclosed and agreed to by you if you purchase additional features, products or services we offer on the Service, contains the entire agreement between you and Divinity regarding the use of the Service. If any provision of this Agreement is held invalid, the remainder of this Agreement shall continue in full force and effect. The failure of the Company to exercise or enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision. You agree that your Divinity account is non-transferable and all of your rights to your account and its Content terminate upon your death. No agency, partnership, joint venture, fiduciary or other special relationship or employment is created as a result of this Agreement and you may not make any representations on behalf of or bind Divinity in any manner.</p>
                </div>

                <br></br>

                <label>
                    <input
                        type="checkbox"
                        checked={termsChecked}
                        onChange={handleTermsChange}
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                    />
                    I accept the Terms and Services
                </label> {termsChecked ? (
                    <div className="tos-button-container">
                        <button className="tos-button" onClick={handleTermsClick}>OK</button>
                    </div>
                ) : (
                    <>
                        <br></br>
                        <br></br>
                        <br></br>
                    </>
                )}
            </div>
        )}
        <div className={"titleContainer"}>
            <div className="titleText">Divinity</div>
        </div>
        <form onSubmit={handleSubmit} className="slider-form">
            <div>
                <Slider title="Zealousness" onChange={(value) => handleSliderChange("Zealousness", value)} />
                <Slider title="Mysticism" onChange={(value) => handleSliderChange("Mysticism", value)} />
                <Slider title="Squeamishness" onChange={(value) => handleSliderChange("Squeamishness", value)} />
                <Slider title="Technology" onChange={(value) => handleSliderChange("Technology", value)} />
                <Slider title="Erudition" onChange={(value) => handleSliderChange("Erudition", value)} />
                <Slider title="Organization" onChange={(value) => handleSliderChange("Organization", value)} />
                <Slider title="Morality" onChange={(value) => handleSliderChange("Morality", value)} />
                <Slider title="Zen" onChange={(value) => handleSliderChange("Zen", value)} />
                <Slider title="Aggression" onChange={(value) => handleSliderChange("Aggression", value)} />
                <Slider title="Grandeur" onChange={(value) => handleSliderChange("Grandeur", value)} />
                <Slider title="Temperament" onChange={(value) => handleSliderChange("Temperament", value)} />
            </div>
            <div style={{ display: 'flex', flexDirection:"column",alignItems:"center",alignContent:"center",justifyContent: 'center', marginTop: '20px' }}>
                <button type="submit" className="submit-button" style={{width:"fit-content"}}>Submit</button>
                <a href="#" onClick={() => { settosButtonClicked(false); setTermsChecked(!termsChecked); }} style={{  marginLeft: '10px' }} className="link" style={{marginTop:"5px"}}>Review Terms & Conditions</a>
            </div>
        </form>
    </>
    )

}

export default Home