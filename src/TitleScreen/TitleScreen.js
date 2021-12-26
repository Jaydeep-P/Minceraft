import React from 'react';
import './TitleScreen.css';
import minecraftLogo from '../images/minceraftLogo.png';

import backGround from '../images/back-ground0.jpeg';
import backGround1 from '../images/back-ground1.jpeg';
import backGround2 from '../images/back-ground2.jpeg';
import backGround3 from '../images/back-ground3.jpeg';
// For multiple splashes 


import GrayButton from '../GrayButton/GrayButton';
import leftGlobeImg from "../images/leftGlobeImg.png";
import rightTotemImg from "../images/rightTotemImg.png";

import {useNavigate} from "react-router-dom";

const splashTextList = ["Glowing_creepy_eyes!", "100%_more_yellow_text!", "Astronomically_accurate!", "Cubism!", "Mostly_harmless!", "!!!1!", "Dramatic_lighting!", "Multithreaded!", "Testificates!", "Hmmmrmm.", "Episode_3!", "As_seen_on_TV!", "Awesome!", "100%_pure!", "May_contain_nuts!", "Less_polygons!", "Limited_edition!", "Flashing_letters!", "Made_by_Mojang!", "It's_here!", "Best_in_class!", "Excitement!", "More_than_500_sold!", "One_of_a_kind!", "Indev!", "Spiders_everywhere!", "Check_it_out!", "Holy_cow,_man!", "It's_a_game!", "Made_in_Sweden!", "Made_in_C++!", "Reticulating_splines!", "Yaaay!", "Multiplayer!", "Ingots!", "Exploding_creepers!", "That's_no_moon!", "l33t!", "Create!", "Survive!", "Dungeon!", "Exclusive!", "The_bee's_knees!", "Closed_source!", "Classy!", "Wow!", "Oh_man!", "Awesome_community!", "Pixels!", "Teetsuuuuoooo!", "Kaaneeeedaaaa!", "Enhanced!", "90%_bug_free!", "Pretty!", "12_herbs_and_spices!", "Fat_free!", "Absolutely_no_memes!", "Free_dental!", "Ask_your_doctor!", "Cloud_computing!", "Legal_in_Finland!", "Hard_to_label!", "Technically_good!", "Bringing_home_the_bacon!", "Quite_Indie!", "GOTY!", "Euclidian!", "Now_in_3D!", "Inspirational!", "Herregud!", "Yes,_sir!", "Played_by_cowboys!", "OpenGL_ES_2.0+!", "Thousands_of_colors!", "Try_it!", "Try_the_mushroom_stew!", "Sensational!", "Guaranteed!", "Macroscopic!", "Bring_it_on!", "Random_splash!", "Call_your_mother!", "Monster_infighting!", "Loved_by_millions!", "Ultimate_edition!", "Freaky!", "Water_proof!", "Uninflammable!", "Whoa,_dude!", "All_inclusive!", "Tell_your_friends!", "NP_is_not_in_P!", "Livestreamed!", "Haunted!", "Polynomial!", "Terrestrial!", "All_is_full_of_love!", "Full_of_stars!", "Scientific!", "Collaborate_and_listen!", "Never_dig_down!", "Take_frequent_breaks!", "Not_linear!", "Han_shot_first!", "Nice_to_meet_you!", "Buckets_of_lava!", "Ride_the_pig!", "Larger_than_Earth!", "sqrt(-1)_love_you!", "Phobos_anomaly!", "Punching_wood!", "Falling_off_cliffs!", "0%_sugar!", "150%_hyperbole!", "Synecdoche!", "Let's_danec!", "Ported_implementation!", "Kiss_the_sky!", "20_GOTO_10!", "Verlet_intregration!", "Peter_Griffin!", "Do_not_distribute!", "Cogito_ergo_sum!", "A_skeleton_popped_out!", "The_Work_of_Many!", "The_sum_of_its_parts!", "umop-apisdn!", "OICU812!", "Bring_me_Ray_Cokes!", "Finger-licking!", "Thematic!", "Pneumatic!", "Sublime!", "Octagonal!", "Une_baguette!", "Gargamel_plays_it!", "Rita_is_the_new_top_dog!", "Representing_Edsbyn!", "Matt_Damon!", "Consummate_V's!", "Cow_Tools!", "Double_buffered!", "V-synched!", "Fan_fiction!", "Flaxkikare!", "Hotter_than_the_sun!", "Internet_enabled!", "Autonomous!", "Engage!", "Fantasy!", "DRR!_DRR!_DRR!", "Kick_it_root_down!", "Regional_resources!", "Google_analyticsed!", "Give_us_Gordon!", "Tip_your_waiter!", "Very_fun!", "12345_is_a_bad_password!", "Vote_for_net_neutrality!", "Omnipotent!", "Gasp!", "...!", "Bees,_bees,_bees,_bees!", "Haha,_LEL!", "Hampsterdance!", "Menger_sponge!", "idspispopd!", "Eple_(original_edit)!", "So_fresh,_so_clean!", "Oh,_ok,_Pigmen!", "Scary!", "Twittered_about!", "Joel_is_neat!", "Welcome_to_your_Doom!", "Stay_a_while_and_listen!", "Treatment_for_your_rash!", "_Autological__is!", "Lots_of_truthiness!", "The_creeper_is_a_spy!", "It's_groundbreaking!", "Let_our_battle's_begin!", "The_sky_is_the_limit!", "Jeb_has_amazing_hair!", "Casual_gaming!", "Undefeated!", "Follow_the_train,_CJ!", "Leveraging_synergy!", "110813!", "90210!", "Tyrion_would_love_it!", "That's_super!", "Bread_is_pain!", "Read_more_books!", "Khaaaaaaaaan!", "Bigger_than_a_bread_box!", "Millions_of_peaches!", "Fnord!", "This_is_my_true_form!", "Pumpkinhead!", "Endless!", "Feature_packed!", "Boots_with_the_fur!", "Stop,_hammertime!", "Conventional!", "Place_ALL_the_blocks!", "Does_barrel_rolls!", "Meeting_expectations!", "PC_gaming_since_1873!", "Got_your_nose!", "Haley_loves_Elan!", "Child's_play!", "Technologic!", "Funk_soul_brother!", "Pumpa_kungen!", "Helo_Cymru!", "My_life_for_Aiur!", "Who_put_it_there?", "You_can't_explain_that!", "Big_Pointy_Teeth!", "Mmmph,_mmph!", "Swords_for_everyone!", "Plz_reply_to_my_tweet!", ".party()!", "Take_her_pillow!", "Put_that_cookie_down!", "Pretty_scary!", "I_have_a_suggestion.", "Now_with_extra_hugs!", "Almost_C++11!", "Woah.", "HURNERJSGER?", "What's_up,_Doc?", "&_Knuckles!", "Pandamonium!", "code.org/minecraft", "discord.gg/minecraft", "Machine_learning!", "Release_the_Snord!", "Team_Mystic!", "Living,_breathing_world!", "Innovating_innovation!", "Change_my_mind.", "This_is_good_for_Realms.", "High-key!", "Funding_secured!", "YANNY_OR_LAUREL???", "Truly_gone_fishing!", "Alexander_Hamilton!", "You're_going_too_fast!", "That's_Numberwang!", "Thanks_for_the_fish!", "#Blessed!", "We're_working_on_it!", "Like_that_smash_button!", "Minecraft_2_unconfirmed!", "Llama,_llama,_duck!", "When_it's_ready!", "Make_a_viral_video!!1", "Artisinal!", "The_Floor_is_Lava!", "Savage_Dad_jokes!", "Protec_but_also_attac", "Potatoes_gonna_potate!", "Bananas!", "zhoolor", "mixer.com/minecraft", "Oh_geez!", "Crush_it!", "Sodium_free!", "What_DOES_the_fox_say?", "#gartzkebrokeit", "All_blocks_covered!", "feedback.minecraft.net", "It_came_from_space.", "Rainbow_turtle?", "Something_funny!", "I_need_more_context.", "Ahhhhhh!", "Don't_worry,_be_happy!", "Water_bottle!", "What's_the_question?", "Plant_a_tree!", "Go_to_the_dentist!", "What_do_you_expect?", "Minecraft_Wiki!"];
const randomIndex = Math.floor(Math.random() * (splashTextList.length));//just picking a random index for the splashtext
const splashTextContent = splashTextList[randomIndex];
const backGroundArr = [backGround,backGround1,backGround2,backGround3];



function TitleScreen(props) {

    var aspectRatio = window.innerHeight/window.innerWidth;
    let navigate = useNavigate();

    const splashTextSize = "5vh";// can improve the size here to include longer texts
    const leftOffset = splashTextContent.length/2; //To center the text and not have it right-aligned

    var buttonHeight = 6.5;


    return (
        <div className="titleScreen">
            <div className="backGround">
                <img className="backGroundImage" src={backGroundArr[randomIndex%4]} alt=" "/>
            </div>


            <div className="minecraftLogo">
                <img className="minecraftLogoImage" src={minecraftLogo} alt="Can't load"/>
                <div className="splash" style={{"left": (65-leftOffset)+"vw"}}>
                    <div className="splashTextBack" style={{fontSize: splashTextSize}}>
                        {splashTextContent}
                    </div>
                    <div className="splashText" style={{fontSize: splashTextSize}}>
                        {splashTextContent}
                    </div>
                </div>
            </div>

            <div className="bottomText">
                <span className="leftText">Beta_1.0</span>
                <a className="rightText" target="_blank" rel="noopener noreferrer" href="https://github.com/Jaydeep-P">Git/JaydeepP</a>
            </div>

            <div className="buttons">
                <GrayButton x={30} y={40} h={buttonHeight} w={40}  works={true} text="Singleplayer" clickHandler = {()=>{navigate("/singleplayer", { replace: true })}}/>
                <GrayButton x={30} y={40+(buttonHeight+2.5)} h={buttonHeight} w={40} works={false} text="Multiplayer" clickHandler = {()=>{navigate("/r", { replace: true })}}/>
                <GrayButton x={30} y={40+ 2*(buttonHeight+2.5)} h={buttonHeight} w={40} works={false} text="Minceraft_Realms" />

                <GrayButton x={30} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} w={19} works={false} text="Options..." clickHandler = {()=>{navigate("/r", { replace: true })}}/>
                <GrayButton x={21+30} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} w={19} works={true} text="Github" clickHandler = {()=>{window.open('https://github.com/Jaydeep-P/Minceraft','newWindow');}}/>
                
                <GrayButton x={30-buttonHeight*aspectRatio -1} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} buttonBackImg={leftGlobeImg} w={buttonHeight*aspectRatio} works={false} text=""/>
                <GrayButton x={70+1} y={40+ 3.5*(buttonHeight+2.5)} h={buttonHeight} buttonBackImg={rightTotemImg} w={buttonHeight*aspectRatio} works={false} text=""/>
                
            </div>

        </div>
    )
}

export default TitleScreen;
