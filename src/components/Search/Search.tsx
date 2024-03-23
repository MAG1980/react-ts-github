import styles from './Search.module.scss';
import { FC, FormEvent, FormEventHandler } from "react";
import { ReactComponent as SearchIcon } from "@/assets/icon-search.svg"
import { Button } from "@/components/Button";

interface SearchProps {
  hasError?: boolean
  onSubmitHandler: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}

export const Search: FC<SearchProps> = ({
                                          hasError,
                                          onSubmitHandler
                                        }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault()
    const text = e.currentTarget.username.value
    if (text.trim()) {
      console.log(text)
      onSubmitHandler(text)
      e.currentTarget.reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className={styles.search}>

        <label htmlFor="search" className={styles.label}>
          <SearchIcon/>
        </label>
        <input
          id="search"
          type="text" className={styles.textField}
          name="username"
          placeholder="Enter username"
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
};
