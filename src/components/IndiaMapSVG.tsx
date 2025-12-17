export default function IndiaMapSVG() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Beige/Light states */}
      <g fill="#F5E6D3">
        {/* Jammu & Kashmir */}
        <path d="M80 30 L90 25 L110 35 L115 45 L105 55 L95 50 Z" />
        {/* Ladakh */}
        <path d="M115 20 L135 25 L140 40 L130 45 L115 45 Z" />
        {/* Himachal Pradesh */}
        <path d="M95 55 L105 55 L110 65 L100 70 Z" />
        {/* Uttarakhand */}
        <path d="M110 65 L120 70 L115 80 L105 75 Z" />
        {/* Punjab */}
        <path d="M85 60 L95 55 L100 70 L90 75 Z" />
        {/* Haryana */}
        <path d="M100 70 L110 65 L115 80 L105 85 Z" />
        {/* Delhi */}
        <circle cx="108" cy="78" r="3" />
        {/* Uttar Pradesh */}
        <path d="M115 80 L145 85 L150 100 L145 110 L130 115 L115 105 L110 90 Z" />
        {/* Bihar */}
        <path d="M145 110 L165 115 L170 125 L165 130 L150 125 Z" />
        {/* Jharkhand */}
        <path d="M150 125 L165 130 L162 145 L152 142 Z" />
        {/* West Bengal */}
        <path d="M165 130 L180 135 L185 150 L178 155 L170 150 L162 145 Z" />
        {/* Sikkim */}
        <path d="M175 120 L182 118 L180 125 L175 127 Z" />
        {/* Assam */}
        <path d="M185 125 L215 130 L220 140 L210 145 L185 140 Z" />
        {/* Arunachal Pradesh */}
        <path d="M210 110 L235 115 L230 130 L215 130 Z" />
        {/* Nagaland */}
        <path d="M220 135 L230 133 L232 142 L225 145 Z" />
        {/* Manipur */}
        <path d="M225 145 L232 142 L230 152 L223 150 Z" />
        {/* Mizoram */}
        <path d="M218 155 L226 153 L224 165 L216 163 Z" />
        {/* Tripura */}
        <path d="M210 150 L218 148 L216 158 L208 156 Z" />
        {/* Meghalaya */}
        <path d="M200 140 L210 145 L208 152 L198 148 Z" />
        {/* Odisha */}
        <path d="M162 145 L170 150 L175 170 L165 180 L155 175 L152 160 Z" />
        {/* Telangana */}
        <path d="M130 200 L145 205 L142 220 L132 215 Z" />
        {/* Andhra Pradesh */}
        <path d="M142 220 L160 225 L155 245 L145 250 L135 240 L132 225 Z" />
      </g>

      {/* Purple/Maroon highlighted states */}
      <g fill="#7D3C5E">
        {/* Rajasthan */}
        <path d="M60 90 L90 85 L110 90 L115 105 L110 125 L95 130 L75 125 L65 110 Z" />
        {/* Gujarat */}
        <path d="M45 130 L75 125 L80 145 L75 165 L60 160 L50 145 Z" />
        {/* Madhya Pradesh */}
        <path d="M95 130 L130 115 L145 120 L150 135 L145 155 L130 165 L110 160 L95 145 Z" />
        {/* Chhattisgarh */}
        <path d="M145 155 L162 145 L165 165 L155 175 L145 170 Z" />
        {/* Maharashtra */}
        <path d="M80 165 L110 160 L130 165 L135 185 L130 200 L110 205 L90 195 L80 180 Z" />
        {/* Karnataka */}
        <path d="M90 210 L110 205 L130 215 L132 235 L120 250 L100 245 L90 230 Z" />
        {/* Kerala */}
        <path d="M100 250 L120 250 L118 280 L108 285 L98 270 Z" />
        {/* Tamil Nadu */}
        <path d="M120 250 L145 250 L148 270 L140 285 L125 280 L118 270 Z" />
        {/* Goa */}
        <path d="M85 195 L92 193 L90 202 L83 200 Z" />
      </g>

      {/* State labels */}
      <g fill="#2C2C2C" fontSize="5" fontFamily="Arial, sans-serif" fontWeight="500">
        <text x="100" y="35" textAnchor="middle">JAMMU</text>
        <text x="100" y="40" textAnchor="middle">AND</text>
        <text x="100" y="45" textAnchor="middle">KASHMIR</text>
        <text x="125" y="35" textAnchor="middle">LADAKH</text>
        <text x="102" y="63" textAnchor="middle" fontSize="4">HP</text>
        <text x="90" y="68" textAnchor="middle" fontSize="4">PUNJAB</text>
        <text x="108" y="75" textAnchor="middle" fontSize="3.5">DELHI</text>
        <text x="130" y="95" textAnchor="middle">UTTAR</text>
        <text x="130" y="100" textAnchor="middle">PRADESH</text>
        <text x="80" y="115" textAnchor="middle">RAJASTHAN</text>
        <text x="62" y="148" textAnchor="middle">GUJARAT</text>
        <text x="115" y="145" textAnchor="middle">MADHYA</text>
        <text x="115" y="150" textAnchor="middle">PRADESH</text>
        <text x="158" y="95" textAnchor="middle" fontSize="4">BIHAR</text>
        <text x="158" y="137" textAnchor="middle" fontSize="4">JH</text>
        <text x="162" y="163" textAnchor="middle" fontSize="4.5">ODISHA</text>
        <text x="177" y="123" textAnchor="middle" fontSize="3.5">SK</text>
        <text x="175" y="143" textAnchor="middle" fontSize="4">WB</text>
        <text x="203" y="135" textAnchor="middle" fontSize="4.5">ASSAM</text>
        <text x="225" y="120" textAnchor="middle" fontSize="4">ARUNACHAL</text>
        <text x="225" y="125" textAnchor="middle" fontSize="4">PRADESH</text>
        <text x="227" y="138" textAnchor="middle" fontSize="3.5">NL</text>
        <text x="227" y="148" textAnchor="middle" fontSize="3.5">MN</text>
        <text x="221" y="159" textAnchor="middle" fontSize="3.5">MZ</text>
        <text x="213" y="154" textAnchor="middle" fontSize="3.5">TR</text>
        <text x="204" y="144" textAnchor="middle" fontSize="3.5">ML</text>
        <text x="105" y="185" textAnchor="middle">MAHARASHTRA</text>
        <text x="137" y="210" textAnchor="middle" fontSize="4.5">TL</text>
        <text x="108" y="230" textAnchor="middle">KARNATAKA</text>
        <text x="145" y="235" textAnchor="middle" fontSize="4.5">ANDHRA</text>
        <text x="145" y="240" textAnchor="middle" fontSize="4.5">PRADESH</text>
        <text x="105" y="268" textAnchor="middle">KERALA</text>
        <text x="135" y="268" textAnchor="middle">TAMIL</text>
        <text x="135" y="273" textAnchor="middle">NADU</text>
        <text x="87" y="198" textAnchor="middle" fontSize="3">GOA</text>
        <text x="155" y="155" textAnchor="middle" fontSize="4">CG</text>
      </g>

      {/* Border outlines */}
      <g stroke="#8B6F47" strokeWidth="0.5" fill="none">
        <path d="M80 30 L90 25 L110 35 L115 45 L140 40 L135 25 L115 20 L95 25 L80 30 Z" />
        <path d="M60 90 L90 85 L110 90 L115 105 L145 85 L170 125 L185 150 L235 115 L210 110 L185 125 L220 140 L232 142 L230 152 L226 153 L224 165 L216 163 L208 156 L216 158 L218 148 L210 145 L198 148 L208 152 L170 150 L178 155 L185 150 L165 180 L145 170 L132 235 L148 270 L140 285 L108 285 L98 270 L100 245 L90 230 L80 180 L90 195 L80 165 L60 160 L50 145 L45 130 L65 110 Z" />
      </g>
    </svg>
  );
}
