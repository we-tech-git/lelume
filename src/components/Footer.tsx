'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        assunto: '', // Changed from array to string
        mensagem: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            assunto: prev.assunto === value ? '' : value // Toggle: deselect if same, select if different
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aqui você pode adicionar a lógica para enviar o formulário
    };

    return (
        <footer id="footer" className="relative w-full bg-blue-600 text-white overflow-hidden pl-[10%]">
            <div id="footer-title-form-draw" className="flex flex-col lg:flex-row w-full max-w-full justify-between">
                <div id="footer-title-form" className="relative z-10 flex flex-col mt-10">
                    {/* Title */}
                    <div id="footer-title" className="text-left mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
                    </div>

                    <div id="footer-middle" className="flex flex-col">
                        {/* Form Section - Left Column */}
                        <div className="footer-form-section mb-16">
                            <form onSubmit={handleSubmit}>
                                {/* Nome e Sobrenome */}
                                <div className="input-row mb-6">
                                    <div>
                                        <label className="form-label required">Nome</label>
                                        <input
                                            type="text"
                                            name="nome"
                                            className="form-input"
                                            placeholder="Seu nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label required">Sobrenome</label>
                                        <input
                                            type="text"
                                            name="sobrenome"
                                            className="form-input"
                                            placeholder="Seu sobrenome"
                                            value={formData.sobrenome}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email e Telefone */}
                                <div className="input-row mb-6">
                                    <div>
                                        <label className="form-label required">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Tel</label>
                                        <input
                                            type="tel"
                                            name="telefone"
                                            className="form-input"
                                            placeholder="(00) 00000-0000"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Assunto */}
                                <div className="mb-6 flex ">
                                    <label className="form-label required">Selecionar assunto</label>
                                    <div className="checkbox-group">
                                        {['Cliente', 'Fornecedor', 'Imprensa', 'Parceria', 'Vagas', 'Outros'].map((assunto) => (
                                            <label key={assunto} className="form-checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    value={assunto.toLowerCase()}
                                                    checked={formData.assunto === assunto.toLowerCase()}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox"
                                                />
                                                {assunto}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Como podemos ajudar */}
                                <div className="mb-6">
                                    <label className="form-label required">Como podemos ajudar?</label>
                                    <textarea
                                        name="mensagem"
                                        className="form-textarea"
                                        placeholder="Descreva como podemos te ajudar..."
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        rows={4}
                                        required
                                    />
                                    <p className="text-blue-200 text-xs mt-2">* Campos obrigatórios</p>
                                </div>

                                {/* Botão Enviar */}
                                <div id="botao-social-icon" className="flex flex-row lg:flex-row justify-between items-center text-align-center">
                                    <button type="submit" className="form-button">
                                        Enviar
                                        <span className="ml-2">→</span>
                                    </button>
                                    <div className="pr-4 pb-2">
                                        {/* Social Icons */}
                                        <div className="flex justify-center lg:justify-end space-x-4 mt-6">
                                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <span className="text-blue-600 font-bold text-sm">f</span>
                                            </a>
                                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <span className="text-blue-600 font-bold text-sm">@</span>
                                            </a>
                                            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                                <span className="text-blue-600 font-bold text-sm">in</span>
                                            </a>
                                        </div></div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
                <div id="footer-draw" className="hidden lg:block mr-[-1%] mt-[-1%]">
                    <img src="/footer_draw.png" alt="Footer Draw" className="w-full h-auto" />
                </div>
            </div>

            {/* Image Section - Right Column */}
            <div id="footer-bottom" className="flex flex-row justify-between pr-[10%] mb-5 text-align-center">
                <div id="footer-bottom-logo-barra-contact" className="flex items-center space-x-6">
                    {/* Logo */}
                    <div className="mb-8">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            <img src="/logo_lelume_footer.png" alt="Logo lelume" className='img-footer-logo' />
                        </Link>
                    </div>
                    {/* Barra vertical */}
                    <div className="h-32 w-0.5 bg-white"></div>
                    {/* Contact Info */}
                    <div className="space-y-2 text-sm mr-10">
                        <p className="font-semibold">GRU Airport</p>
                        <p>Terminal 1 - Rod. Hélio Smidt</p>
                        <p>07190-100 - Guarulhos - SP</p>
                        <p>Tel: +55.11.9919.5995</p>
                        <p>www.lelume.com.br</p>
                    </div>
                </div>

                <div>
                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-end space-x-4 mt-6">
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-blue-600 font-bold text-sm">f</span>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-blue-600 font-bold text-sm">@</span>
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-blue-600 font-bold text-sm">in</span>
                        </a>
                    </div>

                    {/* Footer Text */}
                    <div className="mt-8 text-xs text-blue-200">
                        <p>Preferência de cookies | Política de privacidade | © 2025 lelume.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
