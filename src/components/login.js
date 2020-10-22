import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  min-height: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(https://discord.com/assets/fd91131ea693096d6be5e8aa99d18f9e.jpg) no-repeat center;
  background-size: cover;

  img {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;

    width: 8.125rem;
    height: 2.25rem
  }

  /* Form container */
  div.form__container {
    color: #72767d;
    background-color: #36393f;

    width: 40%;
    transition: width .2s ease;

    padding: 2rem;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
    border-radius: 5px;
  }
  div.form__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center
  }

  @media screen and (max-width: 880px) {
    form {
      width: 80%
    }
  }

  /* Content → Title and description */
  div.form__title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.875rem;
    color: white;

    margin-bottom: 0.5rem;
  }
  div.form__desc {
    font-size: 1rem;
    line-height: 1.25rem;
    color: #b9bbbe
  }

  /* Inputs */
  div.form__inputs_container {
    width: 100%;
    text-align: left;

    margin-top: 1.25rem;
  }

  /* Button */
  button {
    position: relative;

    margin-bottom: 0.5rem;
    width: 100%;
    height: 2.75rem;
    min-width: 8.125rem;
    min-height: 2.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #7289da;
    transition: background-color .17s ease,color .17s ease;
    color: #fff;
    border: none;
    border-radius: 3px;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 2px 1rem;

    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: #677bc4
    }
  }
`;

export const InputBox = styled.div`
  margin-bottom: 1.25rem;

  /* Label */
  h5 {
    flex: 1;

    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1rem;
    color: #8e9297;

    margin-bottom: 0.5rem;
  }

  /* Input */
  input {
    font-size: 1rem;

    padding: 10px;
    width: 100%;
    height: 2.5rem;

    color: ${({ theme }) => theme.normalText};
    background-color: rgba(0, 0, 0, 0.1);

    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: border-color .2s ease-in-out;

    &::placeholder {
      user-select: none;
      color: ${({ theme }) => theme.mutedText}
    }

    &:hover {
      border-color: #040405
    }

    &:focus {
      border-color: #7289da
    }
  }
`;
