const ActionButton = (props) => {
    return (
        <div className="p-4 flex gap-2 fixed bottom-0 right-0 z-40">
            <a href="https://wa.me/8120174322">
                <svg className="h-16 hover:scale-105 cursor-pointer" viewBox="0 0 375 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_102_3)">
                    <circle cx="177.002" cy="177.002" r="167.002" fill="#EBEBEB"/>
                    <path d="M53.0363 364.136C51.5752 364.869 49.8991 363.635 50.1657 362.022L64.2717 276.674C64.5151 275.2 66.2284 274.504 67.4307 275.389L130.636 321.926C131.838 322.811 131.682 324.654 130.347 325.324L53.0363 364.136Z" fill="#EBEBEB"/>
                    </g>
                    <circle cx="177" cy="177" r="150" fill="#00B934"/>
                    <path d="M72.0124 338.903C70.5513 339.637 68.8753 338.403 69.1418 336.79L81.6924 260.852C81.9358 259.379 83.6491 258.683 84.8514 259.568L141.087 300.973C142.289 301.859 142.133 303.701 140.799 304.371L72.0124 338.903Z" fill="#00B934"/>
                    <path d="M166.183 191.916C147.479 177.214 129.221 159.776 135.966 151.209C145.641 138.957 154.358 131.077 132.096 109.221C109.834 87.3648 99.0899 107.454 89.7396 119.319C78.9508 133.008 95.9565 177.257 146.398 217.029C196.84 256.801 243.842 262.972 254.645 249.28C263.971 237.39 280.969 222.287 254.557 205.745C228.145 189.202 222.508 199.535 212.86 211.777C206.072 220.342 184.857 206.665 166.183 191.916V191.916Z" fill="white"/>
                    <defs>
                    <filter id="filter0_d_102_3" x="0" y="0" width="374.003" height="394.352" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="10" dy="10"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_3"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_3" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </a>

            <a href="tel:+918130174322" className="h-14 w-14 drop-shadow-dark1 hover:scale-105 border-2 border-white cursor-pointer rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="mr-1 mt-1" width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="white"/>
                </svg>
            </a>
        </div>
    )
}

export default ActionButton;