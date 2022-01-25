import React from 'react';

import { Helmet } from 'react-helmet';

const TITLE = "Donovan's Projects";

//import legendaryGif from 'https://imgur.com/zPwGskL';
//import droidWarGif from '../../images/gifs/droidWar.gif';
//import alchemistGif from '../../images/gifs/alchemist.gif';

export default function ReactTutorials(){
    return(
        <div>

            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <div className="page padded">
                <div>
                    <h2 className="purpleText + centered"> Legendary </h2>
                    <br/>
                    <div className="centered">
                        <img className="gif + centered" src="https://i.imgur.com/zPwGskL.gif" alt="loading..."/>
                    </div>
                    <p> This project began as a 2D Breath of the Wild clone, but the farther I take it the more ideas I have for it. So far it's mostly just an inventory system, a camera system and a save file handler.</p>

                    <br/>
                    <br/>
                    <br/>

                    <h2 className="purpleText + centered"> The Droid War </h2>
                    <br/>
                    <div className="centered">
                        <img className="gif + centered" src="https://i.imgur.com/tUb8I9y.gif" alt="loading..."/>
                    </div>
                    <p> This project is the start of an engine I'm building specifically for a story I want to tell. Right now it's pretty much just a rudimentary combat system and a less impressive inventory system. I kind of like the character animation a bit better, too. I should really just combine a lot of the aspects of this with Legendary. </p>

                    <br/>
                    <br/>
                    <br/>

                    <h2 className="purpleText + centered"> The Little Alchemist </h2>
                    <br/>
                    <div className="centered">
                        <img className="gif + centered" src="https://i.imgur.com/1jNwVPC.gif" alt="loading..."/>
                    </div>
                    <p> A couple of demo levels for an alchemy-themed 2D CoD Zombies clone. I wanted to develop a game around a unique mechanic and I liked the idea of a shooter where your ammo is also your score and/or your money. It really makes it so every shot counts. The artwork for this one obviously leaves a lot to be desired, but I like the concept. </p>

                    <br/>
                    <br/>
                    <br/>

                    <h2 className="purpleText + centered"> Spaceplane </h2>
                    <br/>
                    <div className="centered">
                        <img className="gif + centered" src="https://i.imgur.com/QYPPXyI.gif" alt="loading..."/>
                    </div>
                    <p> A survival game/empire builder set in space. The idea is that you'd start on a planet, have to build the infrastructure there to get off the planet, and then begin constructing your intergalactic empire. Kind of like space Terraria or space Don't Starve. There's actually a fair bit to this game so far - space pirates, space bees, solar flares, and you can build up a little empire in space and make lots of fake space dollars. I haven't really worked on the early game survival aspect much, and the controls are pretty wonky and unintuitive - in fact, there's a lot I could polish - but it's playable!</p>

                </div>
            </div>
        </div>
    )
}