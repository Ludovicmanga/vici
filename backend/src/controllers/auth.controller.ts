import prisma from "../../prisma/prismaClient";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      throw new Error("sign up failed");
    }
  } catch (e) {
    console.log(e, " is the error my boy");
  }
};

export const login = async (req: any, res) => {
  try {
    res.json(req.user);
  } catch (e) {
    console.log(e, " is the err");
  }
};

export const logout = async (req: any, res) => {
  try {
    await req.logout(function (err) {
      if (err) {
        throw new Error(err);
      }
      res.json({
        loggedOut: true,
      });
    });
  } catch (e) {
    console.log(e, " is the err");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const deleted = await prisma.user.delete({
      where: {
        email,
      },
    });
    res.send(deleted);
  } catch (e) {
    console.log(e, " is the err");
  }
};

export const getLoggedUser = async (req, res) => {
  try {
    if (req.user) {
      const userFound = await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
      });
      if (userFound) {
        res.send({
          user: userFound,
        });
      } else {
        throw new Error("user not found");
      }
    } else {
      res.send({
        user: null,
      });
    }
  } catch (e) {
    console.log(e, " is the error...");
  }
};
