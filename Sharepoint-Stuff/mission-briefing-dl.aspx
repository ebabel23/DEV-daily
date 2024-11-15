<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>DL - Mission Briefing</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: lightgray;
        color: #333;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      h1 {
        text-align: left;
        margin-top: 2rem;
      }

      .button-49,
      .button-49:after {
        display: flex;
        width: 150px;
        height: 76px;
        line-height: 78px;
        font-size: 20px;
        font-family: "Bebas Neue", sans-serif;
        background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        box-shadow: 6px 0px 0px #00e6f6;
        outline: transparent;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        justify-content: center;
        margin-left: 20px;
      }

      .button-49:after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);

        content: "Arrrrr!!";
        display: block;
        position: absolute;
        top: 0;
        left: -20px;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
        text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
        clip-path: var(--slice-0);
      }

      .button-49:hover:after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
      }

      @keyframes glitch {
        0% {
          clip-path: var(--slice-1);
          transform: translate(-20px, -10px);
        }
        10% {
          clip-path: var(--slice-3);
          transform: translate(10px, 10px);
        }
        20% {
          clip-path: var(--slice-1);
          transform: translate(-10px, 10px);
        }
        30% {
          clip-path: var(--slice-3);
          transform: translate(0px, 5px);
        }
        40% {
          clip-path: var(--slice-2);
          transform: translate(-5px, 0px);
        }
        50% {
          clip-path: var(--slice-3);
          transform: translate(5px, 0px);
        }
        60% {
          clip-path: var(--slice-4);
          transform: translate(5px, 10px);
        }
        70% {
          clip-path: var(--slice-2);
          transform: translate(-10px, 10px);
        }
        80% {
          clip-path: var(--slice-5);
          transform: translate(20px, -10px);
        }
        90% {
          clip-path: var(--slice-1);
          transform: translate(-10px, 0px);
        }
        100% {
          clip-path: var(--slice-1);
          transform: translate(0);
        }
      }

      @media (min-width: 768px) {
        .button-49,
        .button-49:after {
          width: 200px;
          height: 86px;
          line-height: 88px;
        }
      }
    </style>
  </head>
  <body>
    <h1>Lade Dein Mission-Briefing herunter</h1>
    <a
      class="button-49"
      id="btn-briefing"
      href="https://funkemedien.sharepoint.com/:b:/r/sites/UserLeserMarktGesamt2/Shared%20Documents/200%20-%20Teams/Product%20Management/Initiativen/Docs/Scoring_Matrix_Full_1.0.pdf"
      download>
      Ahoi!
    </a>
  </body>
</html>
