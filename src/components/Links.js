import React from 'react'
import { Link } from "gatsby"
import './links.css'

const Links = () => (
    <div style={{marginTop: 50, borderTop: '1px solid black'}}>
        <h4 style={{paddingTop: 10}}>Partial</h4>
        <ul className="list">
            <li><Link to="/pcie-vs-pci/">Imbunatatiri PCIe fata de PCI</Link></li>
            <li><Link to="/transfer-dma/">Metode de efectuare a transformarilor prin DMA</Link></li>
            <li><Link to="/executie-transfer-dma/">Executia transferurilor prin DMA</Link></li>
            <li><Link to="/sincronizare-transferuri/">Sincronizarea transferurilor de date</Link></li>
            <li><Link to="/interogare-software/">Interogare software - polling</Link></li>
            <li><Link to="/interogare-hardware/">Interogare hardware - daisy chain</Link></li>
            <li><Link to="/compact-pci/">Compact PCI</Link></li>
            <li><Link to="/pci-express/">PCI Express</Link></li>
            <li><Link to="/adresare-mapare-memorie/">Adresare cu mapare in memorie</Link></li>
            <li><Link to="/structura-sistem-io/">Structura unui sistem de I/E</Link></li>
            <li><Link to="/transferuri-izocrone-usb/">Transferuri izocrone - USB</Link></li>
            <li><Link to="/i2c/">I2C</Link></li>
            <li><Link to="/express-card/">Express Card</Link></li>
            <li><Link to="/usb-on-the-go/">USB On-The-Go</Link></li>
            <li><Link to="/adresare-izolata/">Adresare izolata</Link></li>
        </ul>
        <h4>Examen</h4>
        <ul className="list">
            <li><Link to="/ansamblu-optic-citire/">Ansamblul optic de citire</Link></li>
            <li><Link to="/afisaje-hartie-electronica/">Afisaje cu hartie electronica</Link></li>
            <li><Link to="/embedded-display/">Interfata Embedded Display Port</Link></li>
            <li><Link to="/cec-hdmi/">CEC - interfata HDMI</Link></li>
            <li><Link to="/bluray-ultra/">Bluray Ultra (UHD)</Link></li>
            <li><Link to="/cuda/">Componentele arhitecturii CUDA</Link></li>
            <li><Link to="/twisted-nematic/">Tehnologia Twisted Nematic</Link></li>
            <li><Link to="/tehnici-intercalare-control-rate/">Tehnicile de intercalare spatiala a culorilor si controlul ratei cadrelor - afisaje cristale lichide</Link></li>
            <li><Link to="/avantaje-oled/">Avantaje si dezavantaje OLED</Link></li>
            <li><Link to="/advanced-color-epaper/">Advanced Color ePaper</Link></li>
            <li><Link to="/dedicat-integrat/">Comparatie placi video integrate vs dedicate</Link></li>
            <li><Link to="/tmds-hdmi/">Protocolul TMDS utilizat de HDMI</Link></li>
            <li><Link to="/scriere-cdr/">Scrierea discurilor CD-R</Link></li>
            <li><Link to="/bdxl/">Discurile BDXL</Link></li>
            <li><Link to="/matrice-activa-pasiva/">Afisaje cu matrice pasiva si activa</Link></li>
        </ul>
        <Link to="/">Go back to the homepage</Link>
    </div>
);

export default Links;