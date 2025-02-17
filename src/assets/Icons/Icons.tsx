// Define the type for the ICONS object
type IconsType = Record<string, JSX.Element>;
// ICONS object to store reusable SVG components

export const ICONS: IconsType = {
  extraLongArrow: (
    <svg
      width="21"
      height="13"
      viewBox="0 0 21 13"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.302 12.778l5.663-5.663a.516.516 0 0 0 0-.73L14.302.722a.516.516 0 0 0-.73 0l-.842.843a.516.516 0 0 0 .007.737l3.468 3.33H1.391a.516.516 0 0 0-.516.516v1.204c0 .284.23.515.516.515h14.814l-3.468 3.331a.516.516 0 0 0-.007.737l.843.843a.516.516 0 0 0 .73 0"
        fill="currentColor"
      />
    </svg>
  ),
  lightLeftArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M22.458 12c0 .621-.505 1.126-1.126 1.126h-15.9l6.221 5.934a1.126 1.126 0 0 1-1.553 1.629l-8.25-7.875A1.1 1.1 0 0 1 1.5 12c0-.31.126-.6.349-.816l8.25-7.875a1.13 1.13 0 0 1 1.592.04c.429.446.413 1.16-.039 1.591l-6.22 5.935h15.942c.62 0 1.084.506 1.084 1.125" />
    </svg>
  ),
  longArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26px"
      height="17px"
      viewBox="0 0 15 15"
    >
      <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
    </svg>
  ),
  quote: (
    <svg width="204px" height="168px" viewBox="0 0 204 168" version="1.1">
      <title>BDB6E583-AC81-46B0-A5BA-0A624EB9C683</title>
      <g
        id="Page-4"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.159999996"
      >
        <g
          id="JT-MP-FR-Templates-LP-A"
          transform="translate(-150.000000, -3076.000000)"
          fill="#6BB6C2"
        >
          <g id="Group" transform="translate(0.000000, 2887.000000)">
            <g
              id="noun_Quote_77746-Copy"
              transform="translate(150.000000, 188.573556)"
            >
              <g transform="translate(0.000000, 0.443046)" id="Group-557">
                <path
                  d="M203.981651,1.96874607e-05 L203.981651,83.9915695 L155.986462,83.9915695 C155.986462,110.496069 177.477123,131.986755 203.981644,131.986755 L203.981644,167.982925 C157.591522,167.982925 119.990112,130.38171 119.990112,83.9915695 L119.990112,1.96874607e-05 L203.981651,1.96874607e-05 Z M83.9915237,1.96874607e-05 L83.9915237,83.9915695 L35.9963646,83.9915695 C35.9963646,110.496069 57.4870319,131.986755 83.9915314,131.986755 L83.9915314,167.982925 C37.6014099,167.982925 -1.51952263e-05,130.38171 -1.51952263e-05,83.9915695 L-1.51952263e-05,1.96874607e-05 L83.9915237,1.96874607e-05 Z"
                  id="Path-602"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
};
