import styled from 'styled-components'

export const ChatContainer = styled.div`
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;

  background-color: ${({ theme }) => theme.background};

  section {
    display: flex;
    align-items: center;

    min-width: 0;
    width: 100%;
    flex: 0 0 auto;
    height: 3rem;

    padding: 0 0.5rem;

    font-size: 1rem;
    line-height: 1.25rem;

    cursor: default;
    color: ${({ theme }) => theme.normalText};
    box-shadow: var(--elevation-low);
  }

  div.chat__header_children {
    position: relative;

    flex: 1 1 auto;
    display: flex;
    align-items: center;

    min-width: 0;
    overflow: hidden;
  }

  /* 1 → Icon */
  div.chat__icon_wrapper {
    position: relative;

    height: 1.5rem;
    width: auto;

    flex: 0 0 auto;
    margin: 0 0.5rem;
  }
  div.chat__icon_wrapper svg {
    display: block;

    width: 1.5rem;
    height: 1.5rem;

    -webkit-app-region: no-drag;
    color: ${({ theme }) => theme.mutedText};
  }

  /* 2 → Channel name */
  h3 {
    justify-content: flex-start;

    margin: 0 0.5rem 0 0;

    flex: 0 0 auto;
    min-width: auto;

    overflow: hidden;
    white-space: nowrap;

    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.header};
  }

  /* Divider */
  div.chat__divider {
    width: 1px;
    height: 1.25rem;

    margin: 0 0.5rem;
    flex: 0 0 auto;

    background-color: rgba(255, 255, 255, 0.1);
  }

  /* 3 → Channel topic */
  div.chat__channel_topic {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0 0 0 8px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.125rem;
    color: ${({ theme }) => theme.headerSecondary};
  }

  /* Chat messages list */
  div.chat__messages {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
    z-index: 0;
  }

  /* Chat messages content */
  div.message__content {
    margin-top: 1.0625rem;
    min-height: 2.75rem;
    padding: .125rem 3rem .125rem 4.5rem;

    position: static;
  }
  div.message__content img {
    position: absolute;
    left: 1rem;
    text-indent: -9999px;

    margin-top: calc(4px - .125rem);

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 50%;
    overflow: hidden;
    flex: 0 0 auto;

    user-select: none;
    pointer-events: auto;

    z-index: 1;
  }
  /* Message header container */
  div.message__content h2 {
    display: block;
    position: relative;

    line-height: 1.375rem;
    min-height: 1.375rem;
    overflow: hidden;

    color: ${({ theme }) => theme.mutedText};
    white-space: break-spaces;
  }
  /* Header text → Username */
  span.message__headerText {
    margin-right: .25rem;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.header};

    display: inline;
    vertical-align: baseline;
    position: relative;
  }
  /* Timestamp */
  span.message__timestamp {
    display: inline-block;
    height: 1.25rem;
    cursor: default;
    pointer-events: none;

    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.mutedText};

    vertical-align: baseline;
    margin-left: .25rem;
  }

  /* Chat text form */
  div.chat__text_area {
    margin-bottom: 1.5rem;

    background-color: ${({ theme }) => theme.background};

    position: relative;
    width: 100%;
    min-height: 2.75rem;
    height: 2.75rem;

    flex-shrink: 0;
    padding: 0 1rem;
    margin-top: -0.5rem;

    text-indent: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div.chat__text_area form {
    flex: 1;

    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.textAreaBackground};
  }
  div.chat__text_area form > input {
    width: 100%;
    max-height: 50vh;

    padding: 11px 1rem;

    background-color: transparent;
    color: ${({ theme }) => theme.normalText};
    border-style: none;

    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;

    &::placeholder {
      color: ${({ theme }) => theme.mutedText}
    }

    /* If the user is not in a channel */
    &:disabled {
      cursor: not-allowed
    }
    &:disabled &::placeholder {
      color: ${({ theme }) => theme.mutedText}
    }
  }
  div.chat__text_area form > button {
    display: none
  }
`
