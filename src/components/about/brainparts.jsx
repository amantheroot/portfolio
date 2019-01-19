import React, { Component } from "react";

import Styles from "../../styles/partials/_variables.scss";

class BrainParts extends Component {
  componentDidMount() {
    this.refs.bpg.childNodes.forEach((bp, id) => {
      bp.addEventListener("mouseover", () => {
        this.props.onMouseOver(id, false);
      });
      bp.addEventListener("mouseout", () => {
        this.props.onMouseOut(id, false);
      });
    });
  }
  render() {
    const style = {
      fill: Styles.Color5,
      fillOpacity: 0,
      transition: "fill-opacity 0.7s"
    };

    const ImgHeight = this.props.size;
    const ImgRatio = 1.0370599999999999;
    const ImgWidth = ImgHeight * ImgRatio;

    const OldHeight = 271.79568;
    const OldWidth = 281.87152;

    const HeightRatio = ImgHeight / OldHeight;
    const WidthRatio = ImgWidth / OldWidth;

    const Path1data =
      "m 164.6923,280.39836 c 0,0 0.29941,0.36568 0.76563,0.95289 -0.47736,-0.60158 -0.76563,-0.95289 -0.76563,-0.95289 z m 0,0 c -0.53846,0.54123 -1.08702,1.05027 -1.64062,1.54623 0.55332,-0.49511 1.10246,-1.0053 1.64062,-1.54623 z m 0.78321,0.9745 c -3.86829,2.93887 -7.90551,5.15432 -11.94141,6.82148 -3.86472,1.78604 -7.82899,2.86434 -11.67969,3.44808 -11.62971,2.19955 -21.57104,0.80645 -25.32421,0.1002 23.65502,37.53452 68.33398,23.4115 68.33398,23.4115 -3.60615,-13.31133 -16.16164,-29.713 -19.38867,-33.78126 z m -2.95508,1.03737 c -0.4009,0.34619 -0.80717,0.67813 -1.21484,1.00201 0.40804,-0.32342 0.8136,-0.65607 1.21484,-1.00201 z m -1.78711,1.45585 c -0.51191,0.39102 -1.02794,0.76393 -1.54883,1.12185 0.52099,-0.35691 1.03683,-0.73177 1.54883,-1.12185 z m -2.41797,1.69162 c -0.25002,0.16189 -0.50025,0.3207 -0.75195,0.47546 0.25166,-0.15428 0.50196,-0.31408 0.75195,-0.47546 z m -43.25976,3.74475 c 0,0 0.37983,0.12507 0.92773,0.29469 -0.4294,-0.1358 -0.92773,-0.29469 -0.92773,-0.29469 z m 0,0 c 0.47589,0.83193 0.966,1.63053 1.46093,2.41659 -0.49507,-0.786 -0.98497,-1.58454 -1.46093,-2.41659 z m 1.84961,0.56583 c 0.1894,0.0541 0.34554,0.0981 0.5625,0.15717 -0.20009,-0.0547 -0.38609,-0.10676 -0.5625,-0.15717 z m 2.63281,0.67782 c 0.11195,0.0261 0.19303,0.0484 0.30859,0.0747 -0.11235,-0.0256 -0.19967,-0.0492 -0.30859,-0.0747 z m 3.45117,0.70534 c 0.71079,0.12502 1.45019,0.24365 2.23242,0.35365 -0.77907,-0.1101 -1.52434,-0.22866 -2.23242,-0.35365 z m 3.30078,0.48921 c 0.59854,0.0743 1.21237,0.14044 1.84375,0.2004 -0.62994,-0.0602 -1.24656,-0.12598 -1.84375,-0.2004 z m 13.02344,0.22004 c -0.0515,0.005 -0.1029,0.0108 -0.1543,0.0157 0.0514,-0.005 0.10283,-0.0106 0.1543,-0.0157 z";
    const Path2data =
      "m 250.85832,281.65972 c -14.6804,16.25002 -19.49804,32.99023 -19.49804,32.99023 48.72936,12.73335 66.59065,-18.64714 69.33398,-24.20703 -1.68318,0.44242 -4.88296,1.26299 -8.99805,2.0957 0,0 -20.61476,4.92985 -40.83789,-10.8789 z m 49.83594,8.7832 c 0.26084,-0.52864 0.43555,-0.9082 0.43555,-0.9082 0,0 -0.17471,0.37956 -0.43555,0.9082 z m -43.4043,-5.20117 c 1.60061,0.81044 3.47093,1.67661 5.56641,2.51367 -2.09556,-0.83705 -3.96573,-1.70323 -5.56641,-2.51367 z m 10.64649,4.3125 c 1.20552,0.37251 2.45981,0.72166 3.75781,1.03711 -1.29801,-0.31549 -2.55229,-0.66457 -3.75781,-1.03711 z m 30.22656,0.89844 c -1.32517,0.36778 -2.64207,0.67159 -3.94727,0.91797 1.30517,-0.24642 2.62212,-0.55015 3.94727,-0.91797 z m -24.48828,0.58593 c 1.34102,0.27908 2.72261,0.5189 4.14062,0.70899 -1.41737,-0.19005 -2.80017,-0.43003 -4.14062,-0.70899 z";
    const Path3data =
      "m 178.91672,266.88 c 0,0 11.27289,9.07092 21.74022,0.8223 0,0 3.60416,-3.5537 7.34734,-4.03152 0,0 1.48405,-1.10104 0.86083,-5.07402 -0.62321,-3.97298 -0.93482,-15.26871 -0.93482,-15.26871 0,0 0.54531,-26.25284 0.0779,-27.03185 -0.46741,-0.77902 -0.62322,-3.42767 -2.49286,-3.42767 -1.86963,0 -30.38365,3.89847 -40.19722,-4.6741 -9.81357,-8.57257 -14.6455,-26.95395 -16.04773,-31.78385 -1.40222,-4.8299 -9.34819,-16.43724 -15.19081,-19.4754 -5.84262,-3.03816 -17.21625,2.02544 -17.83946,3.58347 -0.62321,1.55804 -2.1269,-0.93834 -6.42351,14.59555 0,0 -0.88135,2.64407 -2.03813,1.8178 -1.15678,-0.82627 -8.427962,-12.50424 -8.207623,-31.01271 0.220339,-18.50847 0.881353,-21.04237 0.881353,-21.04237 0,0 -13.550845,15.20339 -14.762709,17.07627 -1.211865,1.87288 -7.766949,15.1483 -8.372881,17.40678 0,0 -6.96053,10.11737 -6.726826,21.5689 0.233705,11.45154 0.46741,8.49128 0.46741,8.49128 l 4.206686,8.95868 -4.362489,7.47855 c 0,0 -6.033934,11.12123 -2.398341,31.06191 3.635594,19.94068 13.550848,37.12712 24.567797,43.62712 11.016953,6.5 8.835383,6.48443 21.767043,11.00273 0,0 41.73826,10.35937 64.07883,-24.66914 z";
    const Path4data =
      "m 291.70989,106.43707 c 0.79549,3.09359 -0.61884,20.41725 -3.44727,27.13476 -2.82843,6.71752 -13.78695,11.84505 -15.20117,13.34765 -1.41421,1.5026 -0.35352,2.82813 -0.35352,2.82813 3.27037,7.6014 1.8553,20.15173 -5.74609,25.80859 -7.6014,5.65685 -8.48633,13.61133 -8.48633,13.61133 -1.06066,16.79379 -9.54596,21.21363 -18.03125,23.51172 -8.48528,2.2981 -34.92969,0.18945 -34.92969,0.18945 1.86964,0 2.02673,2.64872 2.49414,3.42774 0.46741,0.77901 -0.0781,27.03125 -0.0781,27.03125 0,0 0.31038,11.29655 0.93359,15.26953 0.62322,3.97298 -0.85937,5.07422 -0.85937,5.07422 2.18635,-0.52639 5.87304,2.83593 5.87304,2.83593 10.33392,10.16418 22.24414,1.29297 22.24414,1.29297 1.27264,-0.872 1.13477,-0.59961 1.13477,-0.59961 23.28154,32.79342 54.43945,25.33789 54.43945,25.33789 5.45091,-1.10302 10.5918,-2.50781 10.5918,-2.50781 3.5625,-0.25 14.25,-5.25 14.25,-5.25 6.1875,-2.1875 14.9375,-12.5 14.9375,-12.5 11,-11.5 14.875,-29.875 16.625,-44.25 1.75,-14.375 -7.5625,-30 -7.5625,-30 0,0 6.56296,-9.49901 4.63672,-18.50586 -1.92624,-9.00684 -8.47266,-25.23242 -8.47266,-25.23242 -11.89802,-27.61466 -44.99218,-47.85546 -44.99218,-47.85546 z";
    const Path5data =
      "M 113.31445 0.46484375 C 105.06544 0.29926782 95.001478 3.5454566 91.734375 5.0878906 C 91.734375 5.0878906 81.404828 9.6353826 76.455078 12.994141 C 76.455078 12.994141 62.844011 20.772178 60.369141 23.423828 C 60.369141 23.423828 46.5625 33.169922 41.625 37.669922 L 33.601562 44.515625 C 33.601562 44.515625 32.941042 47.050124 32.720703 65.558594 C 32.500364 84.067064 39.770954 95.744044 40.927734 96.570312 C 42.084514 97.396582 42.966797 94.753906 42.966797 94.753906 C 47.263407 79.220016 48.765462 81.716243 49.388672 80.158203 C 50.011882 78.600173 61.385896 73.536059 67.228516 76.574219 C 73.071136 79.612379 81.017702 91.218928 82.419922 96.048828 C 83.822152 100.87873 88.653227 119.26141 98.466797 127.83398 C 108.28037 136.40655 136.79443 132.50781 138.66406 132.50781 C 138.76443 132.50781 138.85842 132.51864 138.94922 132.5332 L 138.95117 132.5293 C 138.95117 132.5293 138.95855 132.53279 138.95898 132.5332 C 139.03752 132.54625 139.10985 132.56879 139.18164 132.5918 C 139.7422 132.50051 141.10169 130.5818 140.625 113.54492 C 140.625 113.54492 141.5 83.294922 140.75 73.544922 C 140 63.794922 140.27195 22.628021 140.53711 21.744141 C 140.80228 20.860261 140.49999 13.169483 140 11.607422 C 140 11.607422 136.37132 11.785596 135.40625 11.388672 C 135.40625 11.388672 130.4459 5.55094 126.70312 3.953125 C 126.70312 3.953125 123.43758 1.2311119 114.9375 0.54492188 C 114.40625 0.502035 113.86439 0.47588215 113.31445 0.46484375 z M 139.18164 132.5918 C 139.11709 132.6023 139.06524 132.58998 139.02734 132.57422 C 139.06719 132.59397 139.11202 132.60313 139.18164 132.5918 z";
    const Path6data =
      "M 168.88672 0.74023438 C 167.01563 0.74118659 165.23436 0.86354108 163.625 1.1152344 C 157.18754 2.1220074 150.30469 7.3339844 150.30469 7.3339844 C 145.48419 11.99811 140.00977 11.636719 140.00977 11.636719 L 140.00781 11.640625 C 140.5034 13.254715 140.80097 20.864611 140.53711 21.744141 C 140.27195 22.628021 140 63.794922 140.75 73.544922 C 141.5 83.294922 140.625 113.54492 140.625 113.54492 C 141.0719 129.517 139.90442 132.20237 139.29492 132.55078 C 141.12035 132.69242 165.42233 134.53146 173.59375 132.31836 C 182.07904 130.02027 190.56434 125.60043 191.625 108.80664 C 191.625 108.80664 192.50993 100.85216 200.11133 95.195312 C 207.71272 89.538455 209.12779 76.988119 205.85742 69.386719 C 205.85742 69.386719 204.79673 68.061194 206.21094 66.558594 C 207.62516 65.055994 218.58368 59.928458 221.41211 53.210938 C 224.24054 46.493426 225.65486 29.169762 224.85938 26.076172 C 224.85938 26.076172 224.93409 26.121881 224.94531 26.128906 C 222.86421 24.060166 209.4375 15.857422 209.4375 15.857422 C 209.4375 15.857422 192.625 6.4199219 185.9375 3.7949219 C 180.92188 1.8261741 174.49998 0.73737771 168.88672 0.74023438 z M 139.92773 133.11523 C 139.97451 133.1693 140.02211 133.22222 140.06445 133.28125 C 140.02187 133.22217 139.97476 133.16933 139.92773 133.11523 z M 129.65625 133.18359 C 129.08601 133.21417 128.51348 133.24266 127.91016 133.26758 C 128.52005 133.24252 129.08152 133.21449 129.65625 133.18359 z M 127.02734 133.30273 C 125.95157 133.34006 124.84056 133.36983 123.69531 133.37891 C 124.8511 133.3692 125.95417 133.33977 127.02734 133.30273 z M 140.25781 133.58789 C 140.2909 133.64819 140.32329 133.70884 140.35352 133.77148 C 140.32302 133.70866 140.29124 133.64838 140.25781 133.58789 z M 140.48438 134.06445 C 140.59411 134.33555 140.68267 134.60675 140.76367 134.86914 C 140.68131 134.60425 140.59632 134.33825 140.48438 134.06445 z M 141.23633 136.4043 C 141.29699 137.08963 141.32577 138.50154 141.33789 140.28711 C 141.32621 138.54254 141.30138 137.0571 141.23633 136.4043 z M 141.3418 140.58594 C 141.34887 141.95056 141.32705 143.78499 141.31641 145.45898 C 141.33036 143.70678 141.34883 141.98091 141.3418 140.58594 z";

    const GetNewPathData = (oldData, WR = WidthRatio, HR = HeightRatio) => {
      let patharray = oldData.split(" ");
      let newpatharray = [];
      patharray.forEach(ele => {
        let coords = ele.split(",");
        let pushele = ele;
        if (coords.length === 2) {
          coords[0] = Number.parseFloat(coords[0]) * WR;
          coords[1] = Number.parseFloat(coords[1]) * HR;
          pushele = coords.join(",");
        }
        newpatharray.push(pushele);
      });
      let newData = newpatharray.join(" ");
      return newData;
    };
    const GetNewPathDataWithSpace = oldData => {
      let patharray = oldData.split(" ");
      let newpatharray = [];
      let singlecoord = [];
      patharray.forEach(ele => {
        let pushele = ele;
        if (!isNaN(Number.parseFloat(ele))) {
          singlecoord.push(ele);
          if (singlecoord.length === 2) {
            let newcoord = singlecoord.join(",");
            newpatharray.push(newcoord);
            singlecoord = [];
          }
        } else {
          newpatharray.push(pushele);
        }
      });
      let newData = newpatharray.join(" ");
      return GetNewPathData(newData);
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="brain__parts--svg"
        width={ImgWidth}
        height={ImgHeight}
      >
        <g
          transform={`translate(${-66.850508 * WidthRatio},${-80.36089 *
            HeightRatio})`}
          ref="bpg"
        >
          <path
            className="brainpart"
            style={style}
            d={GetNewPathData(Path1data)}
            id="path1506"
            ref="bp1"
          />
          <path
            style={style}
            d={GetNewPathData(Path2data)}
            id="path1508"
            ref="bp2"
          />
          <path
            style={style}
            d={GetNewPathData(Path3data)}
            id="path1510"
            ref="bp3"
          />
          <path
            style={style}
            d={GetNewPathData(Path4data)}
            id="path1521"
            ref="bp4"
          />
          <path
            style={style}
            d={GetNewPathDataWithSpace(Path5data)}
            transform={`translate(${66.850508 * WidthRatio},${80.36089 *
              HeightRatio})`}
            id="path1559"
            ref="bp5"
          />
          <path
            style={style}
            d={GetNewPathDataWithSpace(Path6data)}
            transform={`translate(${66.850508 * WidthRatio},${80.36089 *
              HeightRatio})`}
            id="path1567"
            ref="bp6"
          />
        </g>
      </svg>
    );
  }
}

export default BrainParts;
