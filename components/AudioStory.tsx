
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Headphones } from 'lucide-react';

const AudioStory: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const changeSpeed = () => {
        const speeds = [1, 1.5, 2];
        const currentIndex = speeds.indexOf(playbackSpeed);
        const nextIndex = (currentIndex + 1) % speeds.length;
        const newSpeed = speeds[nextIndex];

        setPlaybackSpeed(newSpeed);
        if (audioRef.current) {
            audioRef.current.playbackRate = newSpeed;
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = Number(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="py-32 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-allcance-lime/5 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/Imagem1.png"
                                alt="Nossa História"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-allcance-green/60 to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-2xl shadow-lg">
                                <p className="text-allcance-green font-black text-3xl mb-0">20+</p>
                                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">anos de história</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Audio Player */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-allcance-green/5 border border-allcance-green/10 mb-6">
                            <Volume2 className="w-4 h-4 text-allcance-green" />
                            <span className="text-allcance-green text-xs font-bold uppercase tracking-widest">Áudio Exclusivo</span>
                        </div>

                        <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Conheça Mais<br />Sobre Nós
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            Ouça como a Allcance vem transformando empresas no Norte de Minas através de consultoria estratégica de excelência.
                        </p>

                        {/* Audio Player */}
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <audio
                                ref={audioRef}
                                src="/nossa-historia.m4a"
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                onEnded={() => setIsPlaying(false)}
                            />

                            <div className="flex items-center gap-6 mb-6">
                                {/* Play/Pause Button */}
                                <button
                                    onClick={togglePlay}
                                    className="flex-shrink-0 w-16 h-16 rounded-full bg-allcance-green hover:bg-allcance-green/90 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
                                    aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-7 h-7 text-white" />
                                    ) : (
                                        <Play className="w-7 h-7 text-white ml-1" />
                                    )}
                                </button>

                                {/* Info */}
                                <div className="flex-grow">
                                    <p className="text-gray-900 font-bold text-lg mb-1">Clareza antes da ação gestão horizontal</p>
                                    <p className="text-gray-400 text-sm font-medium">
                                        {duration > 0 ? `Duração: ${formatTime(duration)}` : 'Carregando...'}
                                    </p>
                                </div>

                                {/* Waveform Animation */}
                                {isPlaying && (
                                    <div className="flex items-center gap-0.5 h-8">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-allcance-lime rounded-full animate-pulse"
                                                style={{
                                                    height: `${30 + Math.random() * 70}%`,
                                                    animationDelay: `${i * 0.1}s`,
                                                    animationDuration: '0.8s'
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Speed Control */}
                                <button
                                    onClick={changeSpeed}
                                    className="flex-shrink-0 px-4 py-2 rounded-xl bg-gray-200 hover:bg-allcance-lime/20 border border-gray-300 hover:border-allcance-lime transition-all"
                                    aria-label="Alterar velocidade"
                                >
                                    <span className="text-gray-700 font-bold text-sm">{playbackSpeed}x</span>
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-3">
                                <input
                                    type="range"
                                    min="0"
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-allcance-green [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:bg-allcance-green/90"
                                />
                            </div>

                            {/* Time Display */}
                            <div className="flex justify-between text-gray-400 text-xs font-bold">
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                            </div>
                        </div>

                        {/* Tip */}
                        <div className="mt-6 flex items-center gap-3 text-gray-400 text-sm">
                            <Headphones className="w-5 h-5" />
                            <span>Recomendamos usar fones de ouvido para melhor experiência</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioStory;
