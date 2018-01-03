import 'howler';
import { Howl } from 'howler';
import { toASCII } from 'punycode';

class AudioController{
    
    constructor() {
        this.sounds = [];
        this.mute = false;
    }

    toggleMuteAll(toWhat) {
        
        // if given toWhat boolean
        if (toWhat) {

            for (let sound of this.sounds) {
                sound.mute(toWhat);
            }

            this.mute = toWhat;
        }

        // else, just toggle
        for (let sound of this.sounds) {
            sound.mute(!this.mute);
        }

        this.mute = !this.mute;
    }

    newSound(name, path) {
        this.sounds[name] = new Howl({
            src: path,
            autoplay: false,
        })

        return this.sounds[name];
    }

    play(name) {
        console.log(name);
        
        this.sounds[name].play();
        return this.sounds[name];
    }

    mute(name) {
        this.sounds[name].mute(true);
        return this.sounds[mute];
    }

    unMute(name) {
        this.sounds[name].mute(false);
        return this.sounds[mute];
    }
}

export let audio = new AudioController();