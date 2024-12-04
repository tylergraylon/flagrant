"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
const Header = () => {
  return (
    <div className="w-full py-3.5 px-4 text-[#9B9B9B] gap-4 flex justify-between items-center">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        {/* <div
          data-testid="nav-uniswap-logo"
          className="flex items-center gap-1.5 lg:text-lg text-[#FC72FF]"
        >
          <div className="flex items-center gap-2.5">
            <svg
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Happy Holidays from the Uniswap team!</title>
              <g fill="#fc72ff">
                <path d="m19.5092 3.33398c0-.27614-.2238-.5-.5-.5-.2761 0-.5.22386-.5.5v1.5673l-1.3572-.7836c-.2392-.13808-.545-.05614-.683.18301-.1381.23914-.0562.54494.183.68301l1.3577.78388-1.3565.7832c-.2392.13807-.3211.44387-.183.68301.138.23915.4438.32109.683.18302l1.356-.78292v1.56631c0 .27614.2239.5.5.5.2762 0 .5-.22386.5-.5v-1.56687l1.357.78348c.2392.13807.545.05613.6831-.18302.138-.23914.0561-.54494-.1831-.68301l-1.3565-.7832 1.3577-.78388c.2392-.13807.3211-.44387.183-.68301-.138-.23915-.4438-.32109-.683-.18301l-1.3582.78416z"></path>
                <path d="m20.3528 19.9241c-.0598.2307-.1641.4473-.3071.6376-.2662.347-.6185.6176-1.0216.7848-.3625.1569-.7465.2584-1.139.3009-.079.01-.1608.0163-.2403.0224l-.0183.0014c-.2486.0095-.4876.0987-.6821.2545-.1945.1559-.3342.3702-.3987.6115-.0295.1201-.0515.2419-.0657.3648-.0225.1845-.0341.3733-.0467.5775l-.0001.0027c-.009.1472-.0186.3025-.033.4698-.0844.6816-.2807 1.3444-.5808 1.9615-.0613.1297-.1238.2555-.1853.379-.3289.6618-.6263 1.2601-.541 2.0609.0668.6171.3815 1.0306.7996 1.4571.1984.2037.4613.3779.7343.5587l.0009.0006c.765.5064 1.6084 1.0648 1.3305 2.4716-.2274 1.1399-2.1088 2.3361-4.7532 2.7539.2563-.0391-.3078-1.0063-.3711-1.1148l-.0039-.0067c-.0712-.1121-.1442-.2225-.217-.3327l-.0081-.0123c-.2142-.3243-.4274-.6471-.5938-1.0048-.4418-.9385-.6466-2.0243-.4656-3.0527.1639-.9305.7762-1.6738 1.3658-2.3895.0962-.1167.1922-.2332.2851-.3491.7888-.984 1.6164-2.2733 1.7995-3.5506.0155-.111.0293-.232.0438-.3593l.0005-.0044c.0258-.2267.054-.4732.098-.7188.0657-.4269.1989-.8406.3944-1.2254.1334-.2523.3091-.4797.5194-.6722.1096-.1022.1819-.2384.2054-.3868.0234-.1483-.0034-.3003-.0761-.4316l-4.2155-7.6164 6.0549 7.506c.069.087.1561.1577.2553.207s.208.0761.3186.0785c.1107.0024.2205-.0197.3217-.0648.1012-.045.1913-.1119.2639-.1958.0767-.0898.1202-.2035.1231-.3219.003-.1183-.0348-.234-.107-.3276-.2771-.3557-.5653-.7162-.8524-1.0752l-.0137-.0172c-.118-.1475-.2359-.295-.3526-.4415l-1.5237-1.8943-3.0582-3.7823-3.3957-4.03824 3.788 3.69944 3.2553 3.6155 1.624 1.8121c.148.1674.2959.3333.4438.4992l.0037.0041c.3896.4367.7792.8736 1.1688 1.337l.0884.1082.0194.1678c.0262.2275.0131.4579-.0388.6809z"></path>
                <path d="m30.0462 19.6061c-.2215.2297-.3605.5218-.4045.8297-.2172-.0437-.4337-.0955-.6489-.1571-.2155-.0617-.431-.1289-.639-.21-.1078-.039-.208-.0812-.3146-.1267-.1067-.0455-.2156-.0974-.3233-.1526-.4054-.2231-.7809-.497-1.1175-.8151-.6114-.5714-1.1021-1.2134-1.5842-1.8441l-.1237-.1618c-.4927-.6846-1.0215-1.3422-1.5841-1.9701-.555-.6151-1.2111-1.1299-1.9396-1.522-.7543-.3817-1.5737-.6167-2.4149-.6928.8727-.0952 1.7555.013 2.5798.3161.8317.3244 1.5921.8094 2.2381 1.4278.4218.3973.8177.8214 1.1853 1.2697 1.9231-.3803 3.5908-.2561 5.0043.175-.2419.3497-.3344.7994-.2157 1.2423.0375.1398.0935.2697.1647.3877-.1213.1546-.214.3358-.2681.5376-.1459.5448.0277 1.0999.4059 1.4664z"></path>
                <path d="m36.9899 30.1738c.7888-1.0302 1.2485-3.3551.1937-5.2991-.2437.1712-.5408.2718-.8613.2718-.684 0-1.2611-.4578-1.4415-1.0838-.5064.1441-1.0738.0169-1.4726-.3818-.1334-.1334-.2365-.2857-.3092-.4483-.1772.0184-.3608.0054-.5432-.0435-.5453-.1461-.9396-.5746-1.0675-1.086-.5784.1438-1.2011-.0702-1.5652-.5609-1.1333-.2007-2.1378-.5024-2.8394-1.2548-.4317 3.3176 2.4681 4.4997 5.2403 5.6297 2.4304.9907 4.7631 1.9416 4.6659 4.2567z"></path>
                <path d="m21.1553 24.2566c.7317-.0704 2.291-.4525 1.5938-1.6855-.15-.2508-.3674-.454-.6272-.5864-.2598-.1323-.5515-.1883-.8416-.1616-.2943.0318-.5719.1537-.7949.3493s-.3808.4553-.4518.744c-.2166.8065.0129 1.4484 1.1217 1.3402z"></path>
                <path d="m20.945 14.5013c-.459-.5326-1.1713-.8119-1.8696-.9136-.0261.1747-.0426.3507-.0495.5272-.0313 1.4537.4827 3.0504 1.4773 4.16.3182.3587.7019.6526 1.1304.866.2478.1212.9052.4221 1.1487.1515.0185-.0248.0302-.0541.0338-.0849s-.001-.062-.0133-.0904c-.0404-.1159-.1183-.2211-.1957-.3255-.0549-.074-.1095-.1476-.1502-.2245-.0412-.0774-.0853-.153-.1293-.2284-.0827-.1418-.1652-.2833-.2285-.4373-.1669-.4028-.2538-.831-.3404-1.258l-.0002-.001c-.0173-.0854-.0347-.1714-.0527-.2565-.1325-.6592-.3017-1.352-.7608-1.8846z"></path>
                <path d="m30.7526 26.0979c-.7121 1.9963.4364 3.6824 1.5782 5.3586 1.2771 1.8748 2.5458 3.7374 1.1922 6.0076 2.6304-1.0911 3.8793-4.3873 2.7877-7.0026-.6878-1.6542-2.3456-2.551-3.8844-3.3833-.597-.3229-1.1762-.6362-1.6737-.9803z"></path>
                <path d="m23.0554 30.8632c-.4767.1954-.9262.4519-1.3373.7632.9348-.3406 1.916-.5351 2.9095-.577.1778-.0106.3568-.0189.5373-.0273l.0106-.0005c.3145-.0146.6345-.0293.9607-.0566.5369-.0366 1.0665-.1459 1.5743-.3248.5322-.187 1.0165-.4902 1.4181-.8876.4058-.4103.6904-.9255.8222-1.4885.116-.5318.0997-1.0841-.0474-1.608-.1472-.524-.4207-1.0034-.7963-1.3959.1812.4618.2927.9481.3308 1.443.0328.4607-.0296.9232-.1832 1.3585-.15.4126-.3952.7836-.7155 1.0825-.3309.3019-.714.5403-1.1304.7036-.5786.2341-1.233.3299-1.9145.4297-.3109.0455-.6277.092-.9454.1527-.5109.094-1.0113.2391-1.4935.433z"></path>
                <path
                  clip-rule="evenodd"
                  d="m31.3189 39.1045-.0511.0412c-.1187.0959-.2395.1934-.3694.281-.1681.1112-.3442.2097-.5269.2944-.3805.1865-.7987.2817-1.222.2782-1.1465-.0216-1.9569-.8789-2.431-1.8478-.1243-.2539-.2338-.5156-.3433-.7774-.1753-.419-.3506-.8381-.5867-1.2252-.5484-.8995-1.487-1.6237-2.5861-1.4895-.4483.0563-.8686.2587-1.1175.6495-.6552 1.0208.2856 2.4508 1.4849 2.2483.102-.0156.2018-.0432.2974-.0822.0953-.0408.1842-.0951.264-.1613.1676-.1402.2938-.3235.3653-.5304.0788-.2158.0963-.4493.0507-.6744-.0492-.2354-.1876-.4422-.3858-.577.2305.1084.4101.3025.5011.5412.0943.2458.1186.513.07.7719-.0471.2696-.1654.5216-.3427.7296-.0941.1069-.203.1999-.3232.276-.1192.0752-.2469.1359-.3804.1808-.2707.0929-.5588.1229-.8427.0877-.3986-.0571-.7745-.2209-1.0883-.4742-.058-.046-.1136-.0942-.1675-.1442-.2135-.185-.4073-.3921-.5782-.6179-.0767-.0848-.1546-.1685-.236-.2489-.3842-.405-.8375-.7375-1.3384-.9818-.3454-.1524-.7069-.265-1.0775-.3356-.1865-.039-.375-.0671-.5636-.0909-.0194-.002-.0555-.0083-.1007-.0161l-.0081-.0014c-.1574-.0275-.4139-.0722-.4591-.0302.5829-.539 1.2182-1.0177 1.8965-1.4289.6965-.4151 1.4443-.7365 2.2242-.9558.8085-.2286 1.6543-.2938 2.4881-.1916.4292.0518.8496.161 1.25.3247.4195.1684.8067.4087 1.1444.7102.3341.3162.6042.6945.7952 1.1138.1725.3927.3011.8033.3836 1.2243.0442.2266.0776.4755.112.7332.1571 1.1743.3386 2.5293 1.6844 2.7654.0855.0167.1718.029.2586.0369l.2683.0064c.1845-.0132.3678-.0396.5485-.079.3744-.0884.7393-.2135 1.0894-.3734zm-10.1408-2.0328c-.033-.0363-.0656-.0729-.0978-.1099z"
                  fill-rule="evenodd"
                ></path>
                <path d="m30.6948 14.3972c-.138.2391-.0561.5449.1831.683l1.5529.8966-1.3681.3667c-.2668.0715-.4251.3456-.3536.6124.0715.2667.3457.425.6124.3535l2.334-.6255 1.6678.9629-1.7722 1.0231-2.333-.6248c-.2667-.0715-.5408.0868-.6123.3536-.0714.2667.0869.5409.3536.6123l1.3668.3661-1.4498.8371c-.2392.138-.3211.4438-.1831.683.1381.2391.4439.3211.6831.183l1.4508-.8376-.3667 1.3685c-.0714.2668.0869.5409.3536.6124.2668.0714.5409-.0869.6124-.3536l.6254-2.3344 1.7699-1.0219v2.0458l-1.7071 1.7075c-.1953.1953-.1952.5119.0001.7071.1952.1953.5118.1952.7071-.0001l.9999-1.0001v1.673c0 .2761.2239.5.5.5s.5-.2239.5-.5v-1.6751l1.0024 1.0023c.1952.1952.5118.1952.7071 0 .1952-.1953.1952-.5119-.0001-.7071l-1.7094-1.7093v-2.0457l1.7729 1.0236.6253 2.3344c.0715.2667.3457.425.6124.3536.2667-.0715.425-.3456.3536-.6124l-.3667-1.3685 1.4509.8376c.2391.1381.5449.0561.683-.183.138-.2392.0561-.545-.183-.683l-1.4499-.8371 1.3668-.3661c.2667-.0714.425-.3456.3536-.6123-.0714-.2668-.3456-.4251-.6123-.3536l-2.333.6248-1.7721-1.0231 1.6677-.9629 2.334.6255c.2667.0715.5409-.0868.6124-.3535.0715-.2668-.0868-.5409-.3535-.6124l-1.3682-.3667 1.553-.8966c.2391-.1381.321-.4439.183-.683-.1381-.2392-.4439-.3211-.683-.183l-1.5525.8963.3665-1.3671c.0715-.2667-.0868-.5409-.3535-.6124s-.5409.0868-.6124.3535l-.6255 2.3332-1.6695.9639v-1.9264l1.7094-1.7093c.1953-.1953.1953-.5119.0001-.7071-.1953-.1953-.5119-.1953-.7071-.0001l-1.0024 1.0023v-1.7942c0-.2762-.2239-.5-.5-.5s-.5.2238-.5.5v1.7921l-.9999-1.0001c-.1953-.1953-.5119-.1953-.7071-.0001-.1953.1952-.1954.5118-.0001.7071l1.7071 1.7075v1.9266l-1.6666-.9622-.6255-2.3332c-.0714-.2667-.3456-.425-.6124-.3535-.2667.0715-.4249.3457-.3534.6124l.3664 1.3671-1.5524-.8963c-.2392-.1381-.545-.0562-.6831.183z"></path>
                <path d="m10.9307 41.4624c0 .2762-.2239.5-.5.5h-1.56789l.78416 1.3583c.13807.2391.05614.5449-.18301.683-.23915.138-.54494.0561-.68301-.183l-.78389-1.3578-.78319 1.3566c-.13807.2391-.44387.3211-.68302.183-.23914-.1381-.32108-.4439-.18301-.683l.78348-1.3571h-1.56687c-.27614 0-.5-.2238-.5-.5 0-.2761.22386-.5.5-.5h1.56631l-.78292-1.356c-.13807-.2392-.05613-.5449.18301-.683.23915-.1381.54495-.0562.68302.183l.7832 1.3565.78388-1.3577c.13807-.2391.44386-.3211.68301-.183s.32108.4439.18301.683l-.7836 1.3572h1.56733c.2761 0 .5.2239.5.5z"></path>
              </g>
            </svg>
          </div>
          <span
            data-disable-theme="true"
            className="font_subHeading _display-inline _boxSizing-border-box _whiteSpace-pre-wrap _mt-0px _mr-0px _mb-0px _ml-0px _color-1380577629 _fontFamily-299667014 _wordWrap-break-word _fontSize-229441158 _lineHeight-222976511 _fontWeight-233016140 _userSelect-none hidden xl:block"
          >
            Uniswap
          </span>
        </div> */}
        <div className="flex items-center group">
          <MdMenu className="text-2xl cursor-pointer" />
          <IoMdArrowDropdown className="cursor-pointer group-hover:text-white transition-all duration-300" />
        </div>
        <ul className="text-lg  gap-5 lg:gap-6 hidden sm:flex">
          {["Trade", "Explore", "Pool"].map((item, index) => (
            <li
              key={index}
              className="hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="placeholder:text-[#9B9B9B] flex-1 items-center gap-4 justify-center hover:bg-black border border-white/25 border-opacity-7 bg-[rgb(27,27,27)] rounded-[20px] h-10 min-w-[280px] max-w-[400px] w-full overflow-hidden py-2 px-4 hidden lg:flex">
        <LuSearch className="text-[20px]" />
        <input
          placeholder="Search tokens"
          type="text"
          className="flex-1 placeholder:text-[#9B9B9B] text-white bg-transparent focus:outline-none outline-none"
        />
      </div>

      <div className="flex-1 flex justify-end items-center gap-6">
        {/* <button className='bg-[#131313] hover:bg-transparent transition-all duration-300 h-10 rounded-[20px] p-3 border border-[rgba(255, 255, 255, 0.12)] flex justify-center items-center text-sm font-medium text-white text-nowrap'>Get the app</button>
        <svg viewBox="0 0 24 24" fill="none" stroke-width="8" className="text-[rgb(155, 155, 155)] w-5 h-5 cursor-pointer"><path d="M6.82977 12.75C6.97977 15.83 8.01977 18.97 9.82977 21.76C5.58977 20.82 2.35979 17.19 2.02979 12.75H6.82977ZM9.82977 2.23999C5.58977 3.17999 2.35979 6.81 2.02979 11.25H6.82977C6.97977 8.17 8.01977 5.02999 9.82977 2.23999ZM12.1998 2H11.7998L11.4998 2.42999C9.59979 5.12999 8.48977 8.23 8.32977 11.25H15.6698C15.5098 8.23 14.3998 5.12999 12.4998 2.42999L12.1998 2ZM8.32977 12.75C8.48977 15.77 9.59979 18.87 11.4998 21.57L11.7998 22H12.1998L12.4998 21.57C14.3998 18.87 15.5098 15.77 15.6698 12.75H8.32977ZM17.1698 12.75C17.0198 15.83 15.9798 18.97 14.1698 21.76C18.4098 20.82 21.6398 17.19 21.9698 12.75H17.1698ZM21.9698 11.25C21.6398 6.81 18.4098 3.17999 14.1698 2.23999C15.9798 5.02999 17.0198 8.17 17.1698 11.25H21.9698Z" fill="currentColor"></path></svg> */}

        {/* {isConnected && address ? (
          <appkit-button />
        ) : (
          <button
            onClick={() => open({ view: "AllWallets" })}
            className="bg-[rgb(49,28,49)] rounded-[20px] p-3 flex justify-center items-center text-sm font-medium text-[#FC72FF]"
          >
            Connect
          </button>
        )} */}
        <appkit-button />
      </div>
    </div>
  );
};

export default Header;
