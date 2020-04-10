import css from 'styled-jsx/css'

export default css.global`
@import "./static/sass/elements/fonts.scss";
@import "./static/sass/settings/subjectColors.scss";
@import "./static/sass/elements/kaTex.scss";

$white: #fff;
$font-karla-regular: 'Karla-Regular';
$font-karla-bold: 'Karla-Bold';
$font-family-karla: 'Karla';
amp-story {
    font-family: $font-family-karla;

    .katex-display {
        display: inline;

        .katex {
            display: inline;
            .katex-html {
                display: inline;
            }
        }
    }

    .katex {
        position: relative;
        font-size: 1em;
        line-height: inherit;
        font-weight: inherit;
    }

    .ampStoryPage {
        background: #fff;

        @each $subject-name, $color-hex in $reportSubjectColors {
            &.#{$subject-name} {
                --titleFontSize: 26px;
                amp-story-grid-layer {
                    background-color: rgba($color-hex, 0.1);
                }

                .subjectIcon {
                    path {
                        stroke: $color-hex;
                    }
                }
            }
        }
    }

    .subjectIcon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 135px;
        height: 135px;
    }

    .topprHorizontalIcon {
        position: absolute;
        bottom: 10px;
        left: 10px;
        width: 60px;
        cursor: pointer;
    }
}

.ampStoryGridLayer {
    align-content: center;
    // padding-top: 32px;
    // padding-bottom: 32px;

    .title {
        font-size: var(--titleFontSize, 24px);
        font-weight: bold;
        line-height: 1.45;
        letter-spacing: -.9px;
    }

    amp-story-grid-layer.bottom {
        align-content: end;
    }

    .container {
        --padding: 30px;
        padding: var(--padding);
        display: flex;
        justify-content: center;
        flex-direction: column;

        .ampImgContainer {
            position: relative;
            flex: 50%;

            .ampImg {
                margin: auto;
                img {
                    object-fit: contain;
                }
            }
        }

        &.textMedia {
            padding: 20px 0;

            .ampImgContainer {
                flex: 40%;
            }

            .title {
                flex: 60%;
                margin-top: 20px;
                padding-left: var(--padding);
                padding-right: var(--padding);
            }
        }

        &.isMobileView {
            --padding: 25px;
            padding-top: 35px;
        }
    }

    amp-story-grid-layer.center-text {
        align-content: center;
    }
}
`
