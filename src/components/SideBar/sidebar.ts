import styled from 'styled-components'

export const SideBarContainer = styled.div`
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 15rem;
  overflow: hidden;
  display: flex;

  flex: 0 0 auto;

  background-color: ${({ theme }) => theme.backgroundSecondary};

  nav {
    display: inherit;
    flex-direction: column;
    align-items: stretch;
    flex: 1 1 auto;

    min-height: 0;

    position: relative;
    background-color: ${({ theme }) => theme.backgroundSecondary}
  }

  /* User section */
  section {
    flex: 0 0 auto;
    background-color: ${({ theme }) => theme.backgroundSecondaryAlt};

    &:hover {
      div.name__tag_code {
        transform: translateZ(0);
        opacity: 1;
      }
      div.name__tag_custom_status {
        transform: translate3d(0,-107%,0);
        opacity: 0;
        user-select: none;
      }
    }
  }

  div.user__section_container {
    height: 52px;

    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;

    padding: 0 0.5rem;
    margin-bottom: 1px;
  }

  /* Avatar */
  div.avatar__wrapper {
    margin-right: 0.5rem
  }
  div.avatar__wrapper > img {
    width: 2rem;
    height: 2rem;

    position: relative;
    border-radius: 50%;

    cursor: pointer;
  }

  /* Info → Nickname */
  div.name__tag {
    user-select: text;
    cursor: pointer;

    flex-grow: 1;
    margin-right: 4px;
    min-width: 0;
  }
  div.name__tag_nickname {
    display: flex;
    align-items: center;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /* Info → Status/Code */
  div.name__tag_hover_roll {
    display: inline-block;
    vertical-align: top;
    cursor: default;
    text-align: left;
    position: relative;
    width: 100%;
    contain: paint;
  }
  div.name__tag_code, div.name__tag_custom_status {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    display: block;

    transition: all .22s ease;
    transform-style: preserve-3d;
    pointer-events: none;

    width: 100%;
  }
  div.name__tag_code {
    opacity: 0;
    transform: translate3d(0,107%,0);

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  div.name__tag_custom_status {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: ${({ theme }) => theme.headerSecondary};

    font-size: 12px;
    line-height: 13px;
  }

  /* Settings */
  div.settings__wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;

    flex: 0 1 auto;
  }
  div.settings_wrapper button {
    cursor: pointer
  }
`

export const ChannelTitleHeader = styled.div`
  cursor: pointer;
  /* Container */
  header {
    position: relative;
    z-index: 3;

    font-weight: 500;

    padding: 0 1rem;
    height: 48px;

    display: flex;
    align-items: center;

    transition: background-color .1s linear;
    color: ${({ theme }) => theme.header};
    box-shadow: var(--elevation-low);
  }

  /* Channel title */
  h1 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    white-space: nowrap;

    text-overflow: ellipsis;
    overflow: hidden;
    flex: 1;
  }

  /* Down arrow icon */
  svg {
    position: relative;
    top: 3px;

    opacity: .8;
    transition: transform .2s ease-out,stroke-dasharray .2s ease-out,-webkit-transform .2s ease-out;

    margin-left: 4px;

    font-weight: 500;
    color: white
  }
`

export const Channels = styled.div`
  overflow: hidden auto;
  scrollbar-color: transparent transparent;

  padding-right: 2px;

  z-index: 1;

  div.content {
    position: relative;
    height: 2rem;

    padding: 0 0.5rem;
    margin-left: 0.5rem;

    border-radius: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${({ theme }) => theme.defaultChannel};

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.selectedChannelBackground};
      color: ${({ theme }) => theme.interactiveChannelHover}
    }
  }
  div.content.selectedChannel {
    background-color: ${({ theme }) => theme.selectedChannelBackground};
    color: ${({ theme }) => theme.selectedChannelColor}
  }
  div.content > svg {
    display: block;

    width: 1.25rem;
    height: 1.25rem;

    flex: 0 0 auto;
    margin-right: 6px;
  }
  div.content div.content__name {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 500;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    flex: 1 1 auto;
  }
`

export const UserButton = styled.div`
  line-height: 0;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  position: relative;

  color: var(--interactive-normal);
`
