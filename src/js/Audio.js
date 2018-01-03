export default class {

    constructor() {
        this.sounds = {};
        this.mute = false;
    }

    changeMute(toWhat) {
        
        if (toWhat == true || toWhat == false) {

            for (const soundName in this.sounds) {
                if (this.sounds.hasOwnProperty(soundName)) {
                    const sound = this.sounds[soundName];
                    sound.mute(toWhat);
                }
            }

            this.mute = toWhat;
        }
    }

    toggleMute() {

        this.mute = !this.mute;

        for (const soundName in this.sounds) {
            if (this.sounds.hasOwnProperty(soundName)) {
                const sound = this.sounds[soundName];
                sound.mute(this.mute);
            }
        }
    }

    play(name) {

        if (name in this.sounds) {
            if (this.sounds[name].state() === 'loaded') {
                this.sounds[name].play();
            }
            else {
                console.log(`Sound scheduled to play after being loaded`);
            }
        }
        else {
            console.log(`Can't play sound: ${name}`);
        }
    }

    mute(name, ifMute = true) {

        if (name in this.sounds) {
                this.sounds[name].mute(ifMute);
        }
        else {
            console.log(`Can't mute sound: ${name}`);
        }
    }
}