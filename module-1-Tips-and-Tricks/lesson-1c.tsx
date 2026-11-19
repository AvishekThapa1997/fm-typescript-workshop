import { useForm } from "@tanstack/react-form";
import React, { FC } from "react";

export type Artist = {
  id: string;
  name: string;
  avatar: string;
};

const defaultArtist: Artist = {
  id: "",
  name: "",
  avatar: "",
};

const useArtistForm = (onSubmit: (data: Artist) => Promise<void>) => {
  return useForm({
    defaultValues: defaultArtist,
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });
};

type ArtistForm = ReturnType<typeof useArtistForm>;

const ArtistForm: FC = () => {
  // TODO: 1
  const form = useArtistForm(async data => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={() => {}}>
        <form.Field name="id">
          {field => (
            <input
              name={field.name}
              type="text"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Field name="name">
          {field => (
            <input
              name={field.name}
              type="text"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <AvatarField form={form} />
      </form>
    </div>
  );
};

// TODO: 2
const AvatarField: FC<{ form: ArtistForm }> = props => {
  const { form } = props;
  return (
    <form.Field name="avatar">
      {field => (
        <input
          name={field.name}
          type="text"
          value={field.state.value}
          onChange={e => field.handleChange(e.target.value)}
        />
      )}
    </form.Field>
  );
};

export { ArtistForm };
